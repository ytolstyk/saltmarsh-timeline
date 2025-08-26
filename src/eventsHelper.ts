import { TimelineEvent } from "./types";

export function sortEvents(events: TimelineEvent[]) {
  return events.sort((a, b) => {
    return a.daysSinceOrigin - b.daysSinceOrigin;
  });
}

export function groupEvents(events: TimelineEvent[], daysRadius: number) {
  const groupedEvents: { [key: string]: TimelineEvent[] } = {};

  events.forEach((event) => {
    const groupKey =
      Math.floor(event.daysSinceOrigin / daysRadius) * daysRadius;

    if (!groupedEvents[groupKey]) {
      groupedEvents[groupKey] = [];
    }

    groupedEvents[groupKey].push(event);
  });

  Object.keys(groupedEvents).forEach((key) => {
    groupedEvents[key] = sortEvents(groupedEvents[key]);
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
