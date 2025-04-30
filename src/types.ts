export type TimelineEvent = {
  id: string;
  daysSinceOrigin: number;
  title: string;
  description: string;
  tags?: string[];
};

export type FormDate = {
  years: number;
  months: number;
  days: number;
};

export type CheckedTags = Record<string, boolean>;

export type TimelineSettingsData = {
  startYear: number | string | null;
  endYear: number | string | null;
  checkedTags: CheckedTags;
};

export type TimelineEventGroup = {
  daysSinceOrigin: number;
  events: TimelineEvent[];
};

export type JSONImportObj = {
  date: string;
  title: string;
  description: string;
  tags?: string;
};

export type JSONPreviewBlob = {
  days: number;
  months: number;
  years: number;
  title: string;
  description: string;
  tags?: string[];
};
