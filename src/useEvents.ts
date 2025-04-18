import useSWR from "swr";
import { TimelineEvent } from "./types";
import { eventKey, getEvents, setEvents } from "./localStorageHelper";
import { useMemo } from "react";

export function useEvents() {
  const {
    data: events,
    mutate,
    error,
  } = useSWR<TimelineEvent[]>(eventKey, getEvents);

  const appendEvents = async (newEvents: TimelineEvent[]) => {
    try {
      const updatedEvents = [...(events || []), ...newEvents];
      await setEvents(updatedEvents);
      mutate();
    } catch (e) {
      console.error("Failed to append events in useEvents", e);
    }
  };

  const overrideEvents = async (newEvents: TimelineEvent[]) => {
    try {
      await setEvents(newEvents);
      mutate();
    } catch (e) {
      console.error("Failed to override events in useEvents", e);
    }
  };

  const addEvent = async (event: TimelineEvent) => {
    try {
      await setEvents([...(events || []), event]);
      mutate();
    } catch (e) {
      console.error("Failed to add event in useEvents", e);
    }
  };

  const deleteEvent = async (eventToDelete: TimelineEvent) => {
    if (!events) {
      console.error("No events to delete from");
      return;
    }

    const updatedEvents = events.filter((event) => {
      return (
        event.daysSinceOrigin !== eventToDelete.daysSinceOrigin ||
        event.title !== eventToDelete.title ||
        event.description !== eventToDelete.description
      );
    });

    try {
      await setEvents(updatedEvents);
      mutate();
    } catch (e) {
      console.error("Failed to delete event in useEvents", e);
    }
  };

  const minDate = useMemo(() => {
    if (!events || events.length === 0) {
      return 0;
    }

    return Math.min(...events.map((event) => event.daysSinceOrigin));
  }, [events]);

  const maxDate = useMemo(() => {
    if (!events || events.length === 0) {
      return 0;
    }

    return Math.max(...events.map((event) => event.daysSinceOrigin));
  }, [events]);

  return {
    events: events || [],
    minDate,
    maxDate,
    mutate,
    error,
    addEvent,
    overrideEvents,
    deleteEvent,
    appendEvents,
  };
}
