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
