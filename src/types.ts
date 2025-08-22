import type { Schema } from "../amplify/data/resource";

export type TimelineEvent = Schema["Event"]["type"];

export type TimelineFormEvent = {
  daysSinceOrigin: number;
  title: string;
  description: string;
  tags?: string[];
};

export type Campaign = Schema["Campaign"]["type"];

export type TimelineMetadata = Schema["TimelineSettings"]["type"];

export type CampaignInfo = {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string | null;
  campaignStartYear?: number | null;
  campaignEndYear?: number | null;
};

export type CampaignFormData = Pick<
  Campaign,
  | "name"
  | "description"
  | "startDate"
  | "endDate"
  | "campaignStartYear"
  | "campaignEndYear"
>;

export type CampaignFormUpdateData = Partial<Campaign> & {
  id: string;
};

export type FormDate = {
  years: number;
  months: number;
  days: number;
};

export type CheckedTags = Record<string, boolean>;

export type TimelineSettingsData = {
  startYear: number | null;
  endYear: number | null;
  checkedTags: CheckedTags;
  excludeDowntime: boolean;
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

export type NotificationStyle = "success" | "error" | "info" | "warning";
