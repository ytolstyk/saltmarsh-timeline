import { CampaignContext } from "./CampaignContext";
import { useCampaigns } from "./useCampaigns";

type Props = {
  children: React.ReactNode;
};

export const CampaignProvider = ({ children }: Props) => {
  const { campaigns, campaign, campaignId, rawCampaign, setCampaignId, erase } =
    useCampaigns();

  return (
    <CampaignContext.Provider
      value={{
        campaign,
        campaigns,
        campaignId,
        rawCampaign,
        setCampaignId: (id: string) => setCampaignId(id),
        erase,
      }}
    >
      {children}
    </CampaignContext.Provider>
  );
};
