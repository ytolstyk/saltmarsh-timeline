import {
  convertInputToDays,
  convertDaysToDateObject,
  MONTHS,
} from "./dateHelper";
import { JSONImportObj, JSONPreviewBlob, TimelineEvent } from "./types";
import { v4 as uuid } from "uuid";

export function convertJSONDataToBlobs(json: JSONImportObj[]) {
  return json.map((row: JSONImportObj) => {
    const [days, months, years] = row.date.split(",").map(Number);
    const { title, description, tags } = row;

    return {
      days,
      months,
      years,
      title,
      description,
      tags: tags ? tags.split("|") : [],
    };
  });
}

export function validateJSONArray(json: JSONPreviewBlob[]): {
  isValid: boolean;
  message?: string;
} {
  for (let i = 0; i < json.length; i++) {
    const row = json[i];

    const keys = Object.keys(row);
    const values = Object.values(row);
    if (keys.length < 5) {
      return {
        isValid: false,
        message: `Row ${i + 1} does not have at least 5 columns: ${keys.join(
          ","
        )}`,
      };
    }

    const { days, months, years, title, description } = row;

    if ([days, months, years].some((value) => !Number.isInteger(value))) {
      return {
        isValid: false,
        message: `Row ${
          i + 1
        } has non-integer values for days, months, or years: ${values.join(
          ","
        )}`,
      };
    }

    if (months < 1 || months > MONTHS.length) {
      return {
        isValid: false,
        message: `Row ${i + 1} has an invalid month value: ${values.join(",")}`,
      };
    }

    if (days < 1 || days > MONTHS[months - 1][1]) {
      return {
        isValid: false,
        message: `Row ${i + 1} has an invalid day value: ${values.join(",")}`,
      };
    }

    if (typeof title !== "string" || title.trim() === "") {
      return {
        isValid: false,
        message: `Row ${i + 1} has a blank title: ${values.join(",")}`,
      };
    }

    if (typeof description !== "string" || description.trim() === "") {
      return {
        isValid: false,
        message: `Row ${i + 1} has a blank description: ${values.join(",")}`,
      };
    }
  }

  return { isValid: true, message: "JSON is valid" };
}

export function convertJSONToEvents(
  previewArray: JSONPreviewBlob[]
): TimelineEvent[] {
  return previewArray.map((row) => {
    const { days, months, years, title, description, tags } = row;

    return {
      id: uuid(),
      daysSinceOrigin: convertInputToDays({
        years,
        months,
        days,
      }),
      title,
      description,
      tags,
    };
  });
}

export function convertEventsToJSON(events: TimelineEvent[]): JSONImportObj[] {
  return events.map((event) => {
    const { daysSinceOrigin, title, description, tags } = event;
    const { years, months, days } = convertDaysToDateObject(daysSinceOrigin);

    return {
      date: `${days - 1},${months},${years}`,
      title,
      description,
      tags: tags ? tags.join("|") : "",
    };
  });
}

export function downloadJSONEvents(
  events: TimelineEvent[],
  filename: string = "saltmarsh_timeline_events.json"
) {
  const jsonString = JSON.stringify(convertEventsToJSON(events), null, 2);
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
