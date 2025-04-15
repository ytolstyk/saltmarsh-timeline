import { convertInputToDays, MONTHS } from "./dateHelper";
import { CSVModalPreview, TimelineEvent } from "./types";

export function validateCSVArray(csvArray: string[][]): {
  isValid: boolean;
  message?: string;
} {
  for (let i = 0; i < csvArray.length; i++) {
    const row = csvArray[i];

    if (row.length !== 5) {
      return {
        isValid: false,
        message: `Row ${i + 1} does not have 5 columns: ${row.join(",")}`,
      };
    }

    const days = Number(row[0]);
    const months = Number(row[1]);
    const years = Number(row[2]);
    const title = row[3];
    const description = row[4];

    if ([days, months, years].some((value) => !Number.isInteger(value))) {
      return {
        isValid: false,
        message: `Row ${
          i + 1
        } has non-integer values for days, months, or years: ${row.join(",")}`,
      };
    }

    if (months < 1 || months > MONTHS.length) {
      return {
        isValid: false,
        message: `Row ${i + 1} has an invalid month value: ${row.join(",")}`,
      };
    }

    if (days < 1 || days > MONTHS[months - 1][1]) {
      return {
        isValid: false,
        message: `Row ${i + 1} has an invalid day value: ${row.join(",")}`,
      };
    }

    if (typeof title !== "string" || title.trim() === "") {
      return {
        isValid: false,
        message: `Row ${i + 1} has a blank title: ${row.join(",")}`,
      };
    }

    if (typeof description !== "string" || description.trim() === "") {
      return {
        isValid: false,
        message: `Row ${i + 1} has a blank description: ${row.join(",")}`,
      };
    }
  }

  return { isValid: true, message: "CSV is valid" };
}

export function convertCSVToEvents(
  previewArray: CSVModalPreview
): TimelineEvent[] {
  return previewArray.map((row) => {
    return {
      daysSinceOrigin: convertInputToDays({
        years: parseInt(row[2]),
        months: parseInt(row[1]),
        days: parseInt(row[0]),
      }),
      title: row[3],
      description: row[4],
    };
  });
}
