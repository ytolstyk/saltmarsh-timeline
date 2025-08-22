import { amplifyClient } from "./clients";
import { checkedTagsToPayload } from "./settingsHelper";
import {
  Campaign,
  CampaignFormData,
  CampaignFormUpdateData,
  TimelineEvent,
  TimelineFormEvent,
  TimelineSettingsData,
} from "./types";

export const createEvent = async (
  event: TimelineFormEvent,
  campaignId: string
) => {
  const { data, errors } = await amplifyClient.models.Event.create({
    ...event,
    campaignId,
  });

  if (errors && errors.length > 0) {
    throw errors;
  }

  return data;
};

export const batchCreateEvents = async (
  events: TimelineFormEvent[],
  campaignId: string
) => {
  await Promise.all(
    events.map((event) => {
      return amplifyClient.models.Event.create({
        ...event,
        campaignId,
      });
    })
  );
};

export const updateEventAPI = async (eventToUpdate: TimelineEvent) => {
  const { data, errors } =
    await amplifyClient.models.Event.update(eventToUpdate);

  if (errors && errors.length > 0) {
    throw errors;
  }

  return data;
};

export const deleteEventAPI = async (eventId: string) => {
  const { data, errors } = await amplifyClient.models.Event.delete({
    id: eventId,
  });

  if (errors && errors.length > 0) {
    throw errors;
  }

  return data;
};

export const batchDeleteEvents = async (eventIds: string[]) => {
  await Promise.all(
    eventIds.map((id) => {
      return amplifyClient.models.Event.delete({ id });
    })
  );
};

export const getEvents = async (campaign: Campaign | null) => {
  if (!campaign) {
    return [];
  }

  const { data, errors } = await campaign.events();

  if (errors && errors.length > 0) {
    throw errors;
  }

  return data;
};

export const getCampaigns = async () => {
  const { data, errors } = await amplifyClient.models.Campaign.list();

  if (errors && errors.length > 0) {
    throw errors;
  }

  return data;
};

export const createCampaign = async (campaignData: CampaignFormData) => {
  const { data: campaign, errors: campaignErrors } =
    await amplifyClient.models.Campaign.create({
      ...campaignData,
      endDate: campaignData.endDate || null,
    });

  if (!campaign) {
    throw "Failed to create campaign";
  }

  if (campaignErrors && campaignErrors.length > 0) {
    if (campaign) {
      await amplifyClient.models.Campaign.delete({ id: campaign.id });
    }

    throw campaignErrors;
  }

  const { errors: timelineSettingsErrors } =
    await amplifyClient.models.TimelineSettings.create({
      campaignId: campaign.id,
    });

  if (timelineSettingsErrors && timelineSettingsErrors?.length > 0) {
    await amplifyClient.models.Campaign.delete({ id: campaign.id });
    throw timelineSettingsErrors;
  }

  return campaign;
};

export const deleteCampaign = async (campaignId: string) => {
  const { data, errors } = await amplifyClient.models.Campaign.delete({
    id: campaignId,
  });

  if (errors && errors.length > 0) {
    throw errors;
  }

  return data;
};

export const updateCampaign = async (campaign: CampaignFormUpdateData) => {
  const { data, errors } = await amplifyClient.models.Campaign.update(campaign);

  if (errors && errors.length > 0) {
    throw errors;
  }

  return data;
};

export const createTimelineSettings = async (
  timelineSettings: TimelineSettingsData,
  campaignId: string
) => {
  const { data, errors } = await amplifyClient.models.TimelineSettings.create({
    ...timelineSettings,
    checkedTags: checkedTagsToPayload(timelineSettings.checkedTags),
    campaignId,
  });

  if (errors && errors.length > 0) {
    throw errors;
  }

  return data;
};

export const getTimelineSettings = async (campaign: Campaign | null) => {
  if (!campaign) {
    return null;
  }

  const { data, errors } = await campaign.timelineSettings();

  if (errors && errors.length > 0) {
    throw errors;
  }

  return data;
};

export const updateTimelineSettings = async (
  settings: Partial<TimelineSettingsData> & { id: string; campaignId: string }
) => {
  const { data, errors } = await amplifyClient.models.TimelineSettings.update({
    ...settings,
    checkedTags: checkedTagsToPayload(settings.checkedTags),
  });

  if (errors && errors.length > 0) {
    throw errors;
  }

  return data;
};
