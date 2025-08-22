import useSWR from "swr";
import {
  createCampaign,
  deleteCampaign,
  getCampaigns,
  updateCampaign,
} from "./amplifyApi";
import { Campaign, CampaignFormData, CampaignFormUpdateData } from "./types";
import { useEffect, useMemo, useState } from "react";
import { handleErrors } from "./handleErrors";
import { showNotification } from "./notificationHelper";

export function useCampaigns() {
  const {
    data: campaigns,
    mutate,
    error,
    isLoading,
  } = useSWR<Campaign[]>("api/campaigns", getCampaigns);

  const [campaignId, setCampaignId] = useState<string>("");

  const simpleCampaigns = useMemo(() => {
    return campaigns?.map((c) => ({
      id: c.id,
      name: c.name,
      description: c.description,
      startDate: c.startDate,
      endDate: c.endDate ? c.endDate : null,
      campaignStartYear: c.campaignStartYear ?? null,
      campaignEndYear: c.campaignEndYear ?? null,
    }));
  }, [campaigns]);

  const addCampaign = async (campaign: CampaignFormData) => {
    try {
      const data = await createCampaign(campaign);

      mutate();

      showNotification({
        title: "Campaign created",
        message: `Campaign "${data?.name}" created successfully`,
        color: "green",
      });

      return data;
    } catch (e) {
      handleErrors("Failed to add campaign in useCampaigns", e);
    }
  };

  const editCampaign = async (campaign: CampaignFormUpdateData) => {
    try {
      const data = await updateCampaign(campaign);

      mutate();

      showNotification({
        title: "Campaign updated",
        message: `Campaign "${data?.name}" updated successfully`,
        color: "green",
      });

      return data;
    } catch (e) {
      handleErrors("Failed to update campaign in useCampaigns", e);
    }
  };

  const erase = async (campaignId: string) => {
    try {
      const data = await deleteCampaign(campaignId);

      mutate();

      showNotification({
        title: "Campaign deleted",
        message: `Campaign "${data?.name}" deleted successfully`,
        color: "green",
      });

      return data;
    } catch (e) {
      handleErrors("Failed to delete campaign in useCampaigns", e);
    }
  };

  const campaign = useMemo(() => {
    return (
      simpleCampaigns?.find((c) => c.id === campaignId) || {
        id: "",
        name: "",
        description: "",
        startDate: "",
        endDate: null,
        campaignStartYear: null,
        campaignEndYear: null,
      }
    );
  }, [simpleCampaigns, campaignId]);

  const rawCampaign = useMemo(() => {
    return campaigns?.find((c) => c.id === campaignId) || null;
  }, [campaigns, campaignId]);

  useEffect(() => {
    if (campaigns && campaigns.length > 0 && !campaignId) {
      setCampaignId(campaigns[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [campaigns]);

  return {
    campaigns: simpleCampaigns || [],
    mutate,
    error,
    isLoading,
    addCampaign,
    editCampaign,
    campaignId,
    campaign,
    setCampaignId,
    rawCampaign,
    erase,
  };
}
