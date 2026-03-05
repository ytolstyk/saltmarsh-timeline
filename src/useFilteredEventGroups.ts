import { useMemo } from "react";
import {
  filterEventsByDateRange,
  filterEventsBySearch,
  filterEventsByTags,
  isPrehistory,
  PREHISTORY_DAYS,
  radiusInDays,
} from "./dateHelper";
import { groupEvents, sortEvents } from "./eventsHelper";
import { TimelineEvent, TimelineSettingsData } from "./types";
import { dotFullSize } from "./Timeline.styles";

const MIN_HEIGHT = 400;
const MAX_HEIGHT = 5000;
const PX_PER_EVENT = 80;

export function useFilteredEventGroups(
  events: TimelineEvent[],
  timelineSettings: TimelineSettingsData,
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
  const datedEvents = useMemo(
    () => filteredEvents.filter((e) => !isPrehistory(e.daysSinceOrigin)),
    [filteredEvents]
  );
  const prehistoryEvents = useMemo(
    () => filteredEvents.filter((e) => isPrehistory(e.daysSinceOrigin)),
    [filteredEvents]
  );
  const filteredMinDate = useMemo(
    () =>
      datedEvents.reduce(
        (min, e) => Math.min(min, e.daysSinceOrigin),
        Infinity
      ),
    [datedEvents]
  );
  const filteredMaxDate = useMemo(
    () =>
      datedEvents.reduce(
        (max, e) => Math.max(max, e.daysSinceOrigin),
        -Infinity
      ),
    [datedEvents]
  );
  const offset = filteredMinDate;
  const lineLength = filteredMaxDate - filteredMinDate;

  const height = useMemo(
    () =>
      Math.max(
        MIN_HEIGHT,
        Math.min(MAX_HEIGHT, datedEvents.length * PX_PER_EVENT)
      ),
    [datedEvents.length]
  );

  const daysRadius = useMemo(
    () => radiusInDays(height, filteredMaxDate - filteredMinDate, dotFullSize),
    [height, filteredMaxDate, filteredMinDate]
  );

  const eventGroups = useMemo(() => {
    if (ungrouped) {
      return sortEvents(datedEvents).map((event) => ({
        daysSinceOrigin: event.daysSinceOrigin,
        events: [event],
      }));
    }
    return groupEvents(datedEvents, daysRadius);
  }, [datedEvents, daysRadius, ungrouped]);

  const prehistoryGroup = useMemo(() => {
    if (prehistoryEvents.length === 0) return null;
    return { daysSinceOrigin: PREHISTORY_DAYS, events: prehistoryEvents };
  }, [prehistoryEvents]);

  return {
    eventGroups,
    filteredEvents,
    prehistoryGroup,
    offset,
    lineLength,
    height,
  };
}
