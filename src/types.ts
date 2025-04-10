export type TimelineEvent = {
  daysSinceOrigin: number;
  title: string;
  description: string;
};

export type FormDate = {
  years: number;
  months: number;
  days: number;
};

export type TimelineSettingsProps = {
  startYear: number | string | null;
  endYear: number | string | null;
};

export type TimelineEventGroup = {
  daysSinceOrigin: number;
  events: TimelineEvent[];
};
