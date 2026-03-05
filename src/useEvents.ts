import useSWR from "swr";
import { TimelineEvent, TimelineFormEvent } from "./types";
import { useContext, useMemo } from "react";
import {
  batchCreateEvents,
  batchDeleteEvents,
  createEvent,
  getEvents,
  updateEventAPI,
  deleteEventAPI,
} from "./amplifyApi";
import { handleErrors } from "./handleErrors";
import { CampaignContext } from "./CampaignContext";
import { DAYS_IN_YEAR } from "./dateHelper";
import { showNotification } from "./notificationHelper";

export function useEvents() {
  const { campaignId, rawCampaign } = useContext(CampaignContext);

  const {
    data: events,
    mutate,
    error,
  } = useSWR<TimelineEvent[]>(
    campaignId ? ["api/events", campaignId] : null,
    () => getEvents(rawCampaign)
  );

  const appendEvents = async (newEvents: TimelineFormEvent[]) => {
    try {
      const { errors, importedEvents } = await batchCreateEvents(
        newEvents,
        campaignId
      );

      mutate();

      if (Object.keys(errors).length > 0) {
        showNotification({
          title: "Batch create errors",
          message: `The batch import ran with ${Object.keys(errors).length} errors. ${importedEvents} events have been imported.`,
          color: "red",
        });
      } else {
        showNotification({
          title: "Events created",
          message: `Imported ${importedEvents} events.`,
          color: "green",
        });
      }

      return errors;
    } catch (e) {
      handleErrors("Failed to append events in useEvents", e);
    }

    return {};
  };

  const overrideEvents = async (newEvents: TimelineFormEvent[]) => {
    try {
      const { errors, importedEvents } = await batchCreateEvents(
        newEvents,
        campaignId
      );

      if (events) {
        await batchDeleteEvents(events.map((event) => event.id));
      }

      mutate();

      if (Object.keys(errors).length > 0) {
        showNotification({
          title: "Batch create errors",
          message: `The batch import ran with ${Object.keys(errors).length} errors. ${importedEvents} events have been imported.`,
          color: "red",
        });
      } else {
        showNotification({
          title: "Events created",
          message: `Imported ${importedEvents} events.`,
          color: "green",
        });
      }

      return errors;
    } catch (e) {
      handleErrors("Failed to override events in useEvents", e);
    }
  };

  const addEvent = async (event: TimelineFormEvent) => {
    try {
      const data = await createEvent(event, campaignId);

      mutate();

      showNotification({
        title: "Event created",
        message: `Event "${data?.title}" created successfully`,
        color: "green",
      });

      return data;
    } catch (e) {
      handleErrors("Failed to add event in useEvents", e);
    }
  };

  const updateEvent = async (eventToUpdate: TimelineEvent) => {
    try {
      const data = await updateEventAPI(eventToUpdate);

      mutate();

      showNotification({
        title: "Event updated",
        message: `Event "${data?.title}" updated successfully`,
        color: "green",
      });

      return data;
    } catch (e) {
      handleErrors(
        `Failed to update event in useEvents. ID: ${eventToUpdate.id}`,
        e
      );

      return false;
    }
  };

  const deleteEvent = async (eventId: string) => {
    try {
      const data = await deleteEventAPI(eventId);

      mutate();

      showNotification({
        title: "Event deleted",
        message: `Event "${data?.title}" deleted successfully`,
        color: "green",
      });

      return data;
    } catch (e) {
      handleErrors(`Failed to delete event in useEvents. ID: ${eventId}`, e);

      return false;
    }
  };

  const deleteAllCampaignEvents = async () => {
    try {
      if (events) {
        await batchDeleteEvents(events.map((event) => event.id));
      }

      mutate();
    } catch (e) {
      handleErrors("Failed to delete all campaign events in useEvents", e);
    }
  };

  const minDate = useMemo(() => {
    if (!events || events.length === 0) {
      return 0;
    }

    return events.reduce((min, e) => Math.min(min, e.daysSinceOrigin), Infinity);
  }, [events]);

  const maxDate = useMemo(() => {
    if (!events || events.length === 0) {
      return 0;
    }

    return events.reduce((max, e) => Math.max(max, e.daysSinceOrigin), -Infinity);
  }, [events]);

  const { minDateYears, maxDateYears } = useMemo(() => {
    const minYears = Math.floor(minDate / DAYS_IN_YEAR);
    const maxYears = Math.ceil(maxDate / DAYS_IN_YEAR);

    return { minDateYears: minYears, maxDateYears: maxYears };
  }, [minDate, maxDate]);

  const tags = useMemo(() => {
    if (!events) {
      return [];
    }

    const tagsSet = new Set<string>();

    events.forEach((event) => {
      if (event.tags) {
        event.tags.forEach((tag) => {
          if (tag) tagsSet.add(tag);
        });
      }
    });

    return Array.from(tagsSet);
  }, [events]);

  return {
    events: events || [],
    minDate,
    maxDate,
    minDateYears,
    maxDateYears,
    mutate,
    error,
    tags,
    addEvent,
    updateEvent,
    overrideEvents,
    deleteEvent,
    deleteAllCampaignEvents,
    appendEvents,
  };
}
