import { useMemo } from "react";
import {
  filterEventsByDateRange,
  filterEventsByTags,
  radiusInDays,
} from "./dateHelper";
import { groupEvents } from "./eventsHelper";
import { TimelineEvent, TimelineSettingsData } from "./types";
import { dotFullSize } from "./Timeline.styles";

export function useFilteredEventGroups(
  events: TimelineEvent[],
  timelineSettings: TimelineSettingsData,
  height: number
) {
  const timeFilteredEvents = useMemo(
    () =>
      filterEventsByDateRange(
        events,
        timelineSettings.startYear,
        timelineSettings.endYear
      ),
    [events, timelineSettings]
  );
  const filteredEvents = useMemo(
    () =>
      filterEventsByTags(
        timeFilteredEvents,
        timelineSettings.checkedTags,
        timelineSettings.excludeDowntime
      ),
    [
      timeFilteredEvents,
      timelineSettings.checkedTags,
      timelineSettings.excludeDowntime,
    ]
  );
  const filteredMinDate = useMemo(
    () => Math.min(...filteredEvents.map((event) => event.daysSinceOrigin)),
    [filteredEvents]
  );
  const filteredMaxDate = useMemo(
    () => Math.max(...filteredEvents.map((event) => event.daysSinceOrigin)),
    [filteredEvents]
  );
  const offset = filteredMinDate;
  const lineLength = filteredMaxDate - filteredMinDate;

  const daysRadius = useMemo(
    () => radiusInDays(height, filteredMaxDate - filteredMinDate, dotFullSize),
    [height, filteredMaxDate, filteredMinDate]
  );

  const eventGroups = useMemo(
    () => groupEvents(filteredEvents, daysRadius),
    [filteredEvents, daysRadius]
  );

  return {
    eventGroups,
    filteredEvents,
    offset,
    lineLength,
  };
}
