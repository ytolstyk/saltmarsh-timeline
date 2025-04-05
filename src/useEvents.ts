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

  const updateEvents = async (events: TimelineEvent[]) => {
    try {
      await setEvents(events);
      mutate();
    } catch (e) {
      console.error("Failed to set events in useEvents", e);
    }
  };

  const addEvent = async (event: TimelineEvent) => {
    if (!events) {
      console.error("No events to add to");
      return;
    }

    try {
      await setEvents([...events, event]);
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
    updateEvents,
    deleteEvent,
  };
}
