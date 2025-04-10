import { FormDate, TimelineEvent } from "./types";

type MonthObj = {
  monthName: string;
  monthIndex: number;
  day: number;
};

const DAYS_IN_WEEK = 7;
const DAYS_IN_MONTH = 28;
const DAYS_IN_YEAR = 364; // 12 months of 28 days + 4 months of 7 days (28*12 + 7*4 = 364)
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
    return (
      event.daysSinceOrigin >= convertYearsToDays(startYear) &&
      event.daysSinceOrigin <= convertYearsToDays(endYear)
    );
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

export function radiusInDays(
  lineLength: number,
  totalDays: number,
  dotRadius: number
): number {
  return Math.ceil((dotRadius / lineLength) * totalDays);
}
