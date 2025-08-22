import { TimelineEvent } from "./types";

export function removeEvent(
  events: TimelineEvent[],
  eventToDelete: TimelineEvent
) {
  return events.filter((event) => {
    return (
      event.daysSinceOrigin !== eventToDelete.daysSinceOrigin ||
      event.title !== eventToDelete.title ||
      event.description !== eventToDelete.description
    );
  });
}

export function groupEvents(events: TimelineEvent[], daysRadius: number) {
  const groupedEvents: { [key: number]: TimelineEvent[] } = {};

  events.forEach((event) => {
    const groupKey =
      Math.floor(event.daysSinceOrigin / daysRadius) * daysRadius;

    if (!groupedEvents[groupKey]) {
      groupedEvents[groupKey] = [];
    }

    groupedEvents[groupKey].push(event);
  });

  const sortedKeys = Object.keys(groupedEvents)
    .map(Number)
    .sort((a, b) => a - b);
  const timelineEventGroups = sortedKeys.map((daysSinceOrigin) => ({
    daysSinceOrigin,
    events: groupedEvents[daysSinceOrigin],
  }));

  return timelineEventGroups;
}
