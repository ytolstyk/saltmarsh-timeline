import { CheckedTags, FormDate, TimelineEvent } from "./types";

const DOWNTIME_TAG = "downtime";

export const PREHISTORY_DAYS = -999999999;

export function isPrehistory(days: number): boolean {
  return days === PREHISTORY_DAYS;
}

type MonthObj = {
  monthName: string;
  monthIndex: number;
  day: number;
};

const DAYS_IN_WEEK = 7;
const DAYS_IN_MONTH = 28;
export const DAYS_IN_YEAR = 364; // 12 months of 28 days + 4 months of 7 days (28*12 + 7*4 = 364)
export const DAYS_ABBR = [
  "Star",
  "Sun",
  "Moon",
  "Gods",
  "Winds",
  "Earth",
  "Fire",
];
export const DAYS = [
  "Starday",
  "Sunday",
  "Moonday",
  "Godsday",
  "Windsday",
  "Earthday",
  "Fireday",
];
export const MONTHS: Array<[string, number]> = [
  ["Fireseek", 28],
  ["Readying", 28],
  ["Coldeven", 28],
  ["Growfest", 7],
  ["Planting", 28],
  ["Flocktime", 28],
  ["Wealsun", 28],
  ["Richfest", 7],
  ["Reaping", 28],
  ["Goodmonth", 28],
  ["Harvester", 28],
  ["Brewfest", 7],
  ["Patchwall", 28],
  ["Ready'reat", 28],
  ["Sunsebb", 28],
  ["Needfest", 7],
];
export const CALENDAR = MONTHS.reduce(
  (acc, [monthName, daysInMonth], index) => {
    // Fill the array with the month names for each day in the month
    const monthDays: MonthObj[] = Array.from(
      { length: daysInMonth },
      (_, i) => ({ monthName, monthIndex: index, day: i + 1 })
    );

    acc.push(...monthDays);
    return acc;
  },
  [] as MonthObj[]
);

export function daysOptionsNumToDayName(dayNum: number): string {
  if (dayNum < 0) {
    throw new Error("dayNum cannot be negative");
  }

  const index = dayNum % DAYS.length;
  return DAYS[index];
}

export function convertInputToDays(date: FormDate): number {
  const yearsInDays = date.years * DAYS_IN_YEAR; // can be negative
  const longMonths = date.months - Math.floor(date.months / 4); // 4 months have 7 days (Growfest, Richfest, Brewfest, Needfest)
  const shortMonths = date.months - longMonths; // Remaining months are 7 days
  const monthsInDays = longMonths * DAYS_IN_MONTH + shortMonths * DAYS_IN_WEEK;
  const daysInDays = date.days;

  return yearsInDays + monthsInDays + daysInDays;
}

export function convertDaysToDateObject(daysNum: number): FormDate {
  const years = Math.floor(daysNum / DAYS_IN_YEAR); // can be negative
  const remainingDays = daysNum - years * DAYS_IN_YEAR;
  const monthObj = CALENDAR[remainingDays];

  if (!monthObj) {
    // Handle the case where remaining exceed the calendar range
    throw new Error("Cannot convert remainingDays to date object");
  }

  const months = monthObj.monthIndex;
  const days = monthObj.day;

  return {
    years,
    months,
    days,
  };
}

export function convertDaysToReadableDate(daysNum: number): string {
  if (isPrehistory(daysNum)) return "Pre-History";
  const dateObj = convertDaysToDateObject(daysNum);

  const monthName = MONTHS[dateObj.months][0];
  const dayName = daysOptionsNumToDayName(dateObj.days - 1); // -1 because days are 1-based in the calendar

  return `${dayName}, ${monthName} ${dateObj.days}, ${dateObj.years}`;
}

export function convertYearsToDays(years: number): number {
  return years * DAYS_IN_YEAR;
}

export function filterEventsByDateRange(
  events: TimelineEvent[],
  startYear: number | string | null,
  endYear: number | string | null
): TimelineEvent[] {
  if (!events || events.length === 0) {
    return [];
  }

  if (startYear === null || endYear === null) {
    return events;
  }

  if (typeof startYear === "string") {
    startYear = parseInt(startYear);
  }

  if (typeof endYear === "string") {
    endYear = parseInt(endYear);
  }

  if (isNaN(startYear) || isNaN(endYear)) {
    throw new Error("startYear and endYear must be numbers");
  }

  if (startYear > endYear) {
    throw new Error("startYear cannot be greater than endYear");
  }

  return events.filter((event) => {
    if (isPrehistory(event.daysSinceOrigin)) return true;
    return (
      event.daysSinceOrigin >= convertYearsToDays(startYear) &&
      event.daysSinceOrigin < convertYearsToDays(endYear + 1)
    );
  });
}

export function filterEventsByTags(
  events: TimelineEvent[],
  checkedTags: CheckedTags,
  excludeDowntime: boolean
) {
  if (!events || events.length === 0) {
    return [];
  }

  let filteredEvents = events;

  if (excludeDowntime) {
    filteredEvents = events.filter((event) => {
      if (!event.tags || event.tags.length === 0) {
        return true;
      }

      return !event.tags.some((tag) => tag === DOWNTIME_TAG);
    });
  }

  if (Object.values(checkedTags).every((val) => !val)) {
    return filteredEvents;
  }

  return filteredEvents.filter((event) => {
    if (!event.tags) {
      return false;
    }

    return event.tags.some((tag) => {
      if (!tag) {
        return false;
      }

      return checkedTags[tag];
    });
  });
}

export function numValueOrZero(value: number | string): number | string {
  if (typeof value === "number" || value === "-") {
    return value;
  }

  if (typeof value === "string" && value.trim() !== "") {
    return parseInt(value);
  }

  return 0;
}

function getTerms(query: string): string[] {
  return query
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);
}

function termMatchesAnyField(
  term: string,
  title: string,
  description: string,
  tags: (string | null)[] | null | undefined
): boolean {
  const t = term.toLowerCase();
  return (
    title.toLowerCase().includes(t) ||
    description.toLowerCase().includes(t) ||
    (tags?.some((tag) => tag && tag.toLowerCase().includes(t)) ?? false)
  );
}

// Returns ranges for every occurrence of every query term in text, sorted and
// merged so the highlighter can render them in a single pass.
export function getFuzzyMatchRanges(
  query: string,
  text: string
): Array<[number, number]> {
  const terms = getTerms(query);
  const t = text.toLowerCase();
  const raw: Array<[number, number]> = [];

  for (const term of terms) {
    let i = 0;
    while (i <= t.length - term.length) {
      if (t.slice(i, i + term.length) === term) {
        raw.push([i, i + term.length - 1]);
        i += term.length;
      } else {
        i++;
      }
    }
  }

  raw.sort((a, b) => a[0] - b[0]);
  const merged: Array<[number, number]> = [];
  for (const range of raw) {
    if (merged.length > 0 && range[0] <= merged[merged.length - 1][1] + 1) {
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        range[1]
      );
    } else {
      merged.push([range[0], range[1]]);
    }
  }
  return merged;
}

export function filterEventsBySearch(
  events: TimelineEvent[],
  query: string
): TimelineEvent[] {
  if (!query.trim()) return events;
  const terms = getTerms(query);
  return events.filter((event) =>
    terms.every((term) =>
      termMatchesAnyField(term, event.title, event.description, event.tags)
    )
  );
}

export function radiusInDays(
  lineLength: number,
  totalDays: number,
  dotRadius: number
): number {
  return Math.ceil((dotRadius / lineLength) * totalDays);
}
