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
  const batchSize = 50;
  const errors: Record<string, string> = {};
  let importedEvents = 0;

  for (let i = 0; i < events.length; i += batchSize) {
    const currentBatch = events.slice(i, i + batchSize);

    const result = await Promise.all(
      currentBatch.map((event) =>
        amplifyClient.models.Event.create({
          ...event,
          campaignId,
        })
      )
    );

    result.forEach((response, index) => {
      if (response.errors && response.errors.length > 1) {
        errors[index + 1] = String(response.errors[0]);
      } else {
        importedEvents += 1;
      }
    });
  }

  return { errors, importedEvents };
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
  const batchSize = 50;

  for (let i = 0; i < eventIds.length; i += batchSize) {
    const currentBatch = eventIds.slice(i, i + batchSize);
    await Promise.all(
      currentBatch.map((id) => amplifyClient.models.Event.delete({ id }))
    );
  }
};

export const getEvents = async (campaign: Campaign | null) => {
  if (!campaign) {
    return [];
  }

  const { data, errors } = await campaign.events({ limit: 500 });

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
