import useSWR from "swr";
import {
  createTimelineSettings,
  getTimelineSettings,
  updateTimelineSettings,
} from "./amplifyApi";
import { useContext, useMemo } from "react";
import { CampaignContext } from "./CampaignContext";
import { TimelineMetadata, TimelineSettingsData } from "./types";
import { handleErrors } from "./handleErrors";

export const useTimelineSettings = () => {
  const { rawCampaign } = useContext(CampaignContext);

  const {
    data: timelineSettings,
    mutate,
    error,
    isLoading,
  } = useSWR<TimelineMetadata | null>(
    rawCampaign ? ["api/timelineSettings", rawCampaign.id] : null,
    () => getTimelineSettings(rawCampaign),
  );

  const update = async (settings: TimelineSettingsData) => {
    if (!rawCampaign) {
      return;
    }

    let ts = timelineSettings;

    if (!timelineSettings) {
      try {
        ts = await createTimelineSettings(settings, rawCampaign.id);
      } catch (e) {
        handleErrors("Failed to create TimelineSettings:", e);

        return false;
      }
    }

    if (!ts) {
      return;
    }

    try {
      const data = await updateTimelineSettings({
        id: ts.id,
        campaignId: ts.campaignId,
        ...settings,
      });

      mutate();

      return data;
    } catch (e) {
      handleErrors("Failed to update timeline settings:", e);

      return false;
    }
  };

  const timelineSettingsResult = useMemo(() => {
    if (!timelineSettings) {
      return null;
    }

    const checkedTags =
      timelineSettings.checkedTags?.reduce(
        (acc: Record<string, boolean>, tag: string | null) => {
          if (tag) {
            acc[tag] = true;
          }

          return acc;
        },
        {},
      ) || {};

    return {
      ...timelineSettings,
      checkedTags,
    };
  }, [timelineSettings]);

  const timelineSettingsData = useMemo(
    () => ({
      startYear: timelineSettings?.startYear ?? null,
      endYear: timelineSettings?.endYear ?? null,
      checkedTags: timelineSettingsResult?.checkedTags || {},
      excludeDowntime: Boolean(timelineSettings?.excludeDowntime),
      showAllEvents: Boolean(timelineSettings?.showAllEvents),
      reverseOrder: Boolean(timelineSettings?.reverseOrder),
    }),
    [timelineSettingsResult, timelineSettings],
  );

  return {
    timelineSettings: timelineSettingsData,
    rawTimelineSettings: timelineSettingsResult,
    mutate,
    error,
    isLoading,
    update,
  };
};
