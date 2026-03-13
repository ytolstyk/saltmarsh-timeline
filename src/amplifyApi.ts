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

// ─── Validation helpers ───────────────────────────────────────────────────────

function requireId(id: string | undefined | null, label: string) {
  if (!id || !id.trim()) throw new Error(`${label} is required`);
}

function requireString(value: string | undefined | null, label: string) {
  if (!value || !value.trim()) throw new Error(`${label} is required`);
}

// ─── Events ──────────────────────────────────────────────────────────────────

export const createEvent = async (
  event: TimelineFormEvent,
  campaignId: string
) => {
  requireId(campaignId, "campaignId");
  requireString(event.title, "Event title");

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
  requireId(campaignId, "campaignId");

  if (!events || events.length === 0) {
    return { errors: {}, importedEvents: 0 };
  }

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
      if (response.errors && response.errors.length >= 1) {
        errors[i + index + 1] = String(response.errors[0]);
      } else {
        importedEvents += 1;
      }
    });
  }

  return { errors, importedEvents };
};

export const updateEventAPI = async (eventToUpdate: TimelineEvent) => {
  requireId(eventToUpdate.id, "Event id");
  requireString(eventToUpdate.title, "Event title");

  const { data, errors } =
    await amplifyClient.models.Event.update(eventToUpdate);

  if (errors && errors.length > 0) {
    throw errors;
  }

  return data;
};

export const deleteEventAPI = async (eventId: string) => {
  requireId(eventId, "Event id");

  const { data, errors } = await amplifyClient.models.Event.delete({
    id: eventId,
  });

  if (errors && errors.length > 0) {
    throw errors;
  }

  return data;
};

export const batchDeleteEvents = async (eventIds: string[]) => {
  if (!eventIds || eventIds.length === 0) {
    return;
  }

  const batchSize = 50;

  for (let i = 0; i < eventIds.length; i += batchSize) {
    const currentBatch = eventIds.slice(i, i + batchSize);
    const results = await Promise.all(
      currentBatch.map((id) => amplifyClient.models.Event.delete({ id }))
    );

    const batchErrors = results.flatMap((r) => r.errors ?? []);
    if (batchErrors.length > 0) {
      throw batchErrors;
    }
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

// ─── Campaigns ───────────────────────────────────────────────────────────────

export const getCampaigns = async () => {
  const { data, errors } = await amplifyClient.models.Campaign.list();

  if (errors && errors.length > 0) {
    throw errors;
  }

  return data;
};

export const createCampaign = async (campaignData: CampaignFormData) => {
  requireString(campaignData.name, "Campaign name");
  requireString(campaignData.startDate, "Campaign start date");

  const { data: campaign, errors: campaignErrors } =
    await amplifyClient.models.Campaign.create({
      ...campaignData,
      endDate: campaignData.endDate || null,
    });

  if (campaignErrors && campaignErrors.length > 0) {
    throw campaignErrors;
  }

  if (!campaign) {
    throw new Error("Failed to create campaign");
  }

  const { errors: timelineSettingsErrors } =
    await amplifyClient.models.TimelineSettings.create(
      { campaignId: campaign.id },
      { authMode: "userPool" }
    );

  if (timelineSettingsErrors && timelineSettingsErrors.length > 0) {
    await amplifyClient.models.Campaign.delete({ id: campaign.id });
    throw timelineSettingsErrors;
  }

  return campaign;
};

export const updateCampaign = async (campaign: CampaignFormUpdateData) => {
  requireId(campaign.id, "Campaign id");
  requireString(campaign.name, "Campaign name");

  const { data, errors } = await amplifyClient.models.Campaign.update(campaign);

  if (errors && errors.length > 0) {
    throw errors;
  }

  return data;
};

export const deleteCampaign = async (campaignId: string) => {
  requireId(campaignId, "Campaign id");

  const { data: campaign, errors: getErrors } =
    await amplifyClient.models.Campaign.get({ id: campaignId });

  if (getErrors && getErrors.length > 0) {
    throw getErrors;
  }

  if (campaign) {
    const { data: events, errors: eventsErrors } = await campaign.events({
      limit: 10000,
    });

    if (eventsErrors && eventsErrors.length > 0) {
      throw eventsErrors;
    }

    if (events && events.length > 0) {
      await batchDeleteEvents(events.map((e) => e.id));
    }

    const { data: settings, errors: settingsErrors } =
      await campaign.timelineSettings({ authMode: "userPool" });

    if (settingsErrors && settingsErrors.length > 0) {
      throw settingsErrors;
    }

    if (settings) {
      const { errors: deleteSettingsErrors } =
        await amplifyClient.models.TimelineSettings.delete(
          { id: settings.id },
          { authMode: "userPool" }
        );

      if (deleteSettingsErrors && deleteSettingsErrors.length > 0) {
        throw deleteSettingsErrors;
      }
    }
  }

  const { data, errors } = await amplifyClient.models.Campaign.delete({
    id: campaignId,
  });

  if (errors && errors.length > 0) {
    throw errors;
  }

  return data;
};

// ─── Timeline settings ────────────────────────────────────────────────────────

export const getTimelineSettings = async (campaign: Campaign | null) => {
  if (!campaign) {
    return null;
  }

  const { data, errors } = await campaign.timelineSettings({
    authMode: "userPool",
  });

  if (errors && errors.length > 0) {
    throw errors;
  }

  return data;
};

export const createTimelineSettings = async (
  timelineSettings: TimelineSettingsData,
  campaignId: string
) => {
  requireId(campaignId, "campaignId");

  const { data, errors } = await amplifyClient.models.TimelineSettings.create(
    {
      campaignId,
      startYear: timelineSettings.startYear,
      endYear: timelineSettings.endYear,
      checkedTags: checkedTagsToPayload(timelineSettings.checkedTags),
      excludeDowntime: timelineSettings.excludeDowntime,
      showAllEvents: timelineSettings.showAllEvents,
      reverseOrder: timelineSettings.reverseOrder,
    },
    { authMode: "userPool" }
  );

  if (errors && errors.length > 0) {
    throw errors;
  }

  return data;
};

export const updateTimelineSettings = async (
  settings: Partial<TimelineSettingsData> & { id: string; campaignId: string }
) => {
  requireId(settings.id, "TimelineSettings id");
  requireId(settings.campaignId, "campaignId");

  const { data, errors } = await amplifyClient.models.TimelineSettings.update(
    {
      id: settings.id,
      campaignId: settings.campaignId,
      startYear: settings.startYear,
      endYear: settings.endYear,
      checkedTags: checkedTagsToPayload(settings.checkedTags),
      excludeDowntime: settings.excludeDowntime,
      showAllEvents: settings.showAllEvents,
      reverseOrder: settings.reverseOrder,
    },
    { authMode: "userPool" }
  );

  if (errors && errors.length > 0) {
    throw errors;
  }

  return data;
};
