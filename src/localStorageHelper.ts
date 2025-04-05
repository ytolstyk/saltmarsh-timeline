import { TimelineEvent } from "./types";

export const eventKey = "api/events";

export function setEvents(events: TimelineEvent[]) {
  try {
    const serializedState = JSON.stringify(events);
    localStorage.setItem(eventKey, serializedState);
  } catch (e) {
    console.error("Could not save events to localStorage", e);
  }
}

export function getEvents(): TimelineEvent[] {
  try {
    const serializedState = localStorage.getItem(eventKey);
    if (!serializedState) {
      return [];
    }

    return JSON.parse(serializedState) as TimelineEvent[];
  } catch (e) {
    console.error("Could not load events from localStorage", e);

    return [];
  }
}

export function resetEvents() {
  try {
    localStorage.removeItem(eventKey);
  } catch (e) {
    console.error("Could not reset events in localStorage", e);
  }
}
