import useSWR from "swr";
import {
  createTimelineSettings,
  getTimelineSettings,
  updateTimelineSettings,
} from "./amplifyApi";
import { useContext, useEffect, useMemo } from "react";
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
  } = useSWR<TimelineMetadata | null>("api/timelineSettings", () =>
    getTimelineSettings(rawCampaign)
  );

  useEffect(() => {
    mutate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rawCampaign]);

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
        {}
      ) || {};

    return {
      ...timelineSettings,
      checkedTags,
    };
  }, [timelineSettings]);

  const timelineSettingsData = useMemo(
    () => ({
      startYear: timelineSettings?.startYear || null,
      endYear: timelineSettings?.endYear || null,
      checkedTags: timelineSettingsResult?.checkedTags || {},
      excludeDowntime: Boolean(timelineSettings?.excludeDowntime),
    }),
    [timelineSettingsResult, timelineSettings]
  );

  return {
    timelineSettings: timelineSettingsData,
    rawTiemlineSettings: timelineSettingsResult,
    mutate,
    error,
    isLoading,
    update,
  };
};
