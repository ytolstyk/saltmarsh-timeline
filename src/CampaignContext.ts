import { createContext } from "react";
import { Campaign, CampaignInfo } from "./types";

export const CampaignContext = createContext<{
  campaign: CampaignInfo;
  campaigns: CampaignInfo[];
  campaignId: string;
  rawCampaign: Campaign | null;
  setCampaignId: (id: string) => void;
  erase: (id: string) => void;
}>({
  campaign: { id: "", name: "", description: "", startDate: "", endDate: null },
  campaigns: [],
  campaignId: "",
  rawCampaign: null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setCampaignId: (_id: string) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  erase: (_id: string) => {},
});
