import { useMemo } from "react";
import {
  filterEventsByDateRange,
  filterEventsBySearch,
  filterEventsByTags,
  radiusInDays,
} from "./dateHelper";
import { groupEvents, sortEvents } from "./eventsHelper";
import { TimelineEvent, TimelineSettingsData } from "./types";
import { dotFullSize } from "./Timeline.styles";

export function useFilteredEventGroups(
  events: TimelineEvent[],
  timelineSettings: TimelineSettingsData,
  height: number,
  ungrouped: boolean = false,
  searchQuery: string = ""
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
  const tagFilteredEvents = useMemo(
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
  const filteredEvents = useMemo(
    () => filterEventsBySearch(tagFilteredEvents, searchQuery),
    [tagFilteredEvents, searchQuery]
  );
  const filteredMinDate = useMemo(
    () =>
      filteredEvents.reduce(
        (min, e) => Math.min(min, e.daysSinceOrigin),
        Infinity
      ),
    [filteredEvents]
  );
  const filteredMaxDate = useMemo(
    () =>
      filteredEvents.reduce(
        (max, e) => Math.max(max, e.daysSinceOrigin),
        -Infinity
      ),
    [filteredEvents]
  );
  const offset = filteredMinDate;
  const lineLength = filteredMaxDate - filteredMinDate;

  const daysRadius = useMemo(
    () => radiusInDays(height, filteredMaxDate - filteredMinDate, dotFullSize),
    [height, filteredMaxDate, filteredMinDate]
  );

  const eventGroups = useMemo(() => {
    if (ungrouped) {
      return sortEvents(filteredEvents).map((event) => ({
        daysSinceOrigin: event.daysSinceOrigin,
        events: [event],
      }));
    }
    return groupEvents(filteredEvents, daysRadius);
  }, [filteredEvents, daysRadius, ungrouped]);

  return {
    eventGroups,
    filteredEvents,
    offset,
    lineLength,
  };
}
