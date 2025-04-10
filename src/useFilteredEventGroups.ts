import { useMemo } from "react";
import { remInPixels } from "./App.styles";
import { filterEventsByDateRange, radiusInDays } from "./dateHelper";
import { groupEvents } from "./eventsHelper";
import { TimelineEvent, TimelineSettingsProps } from "./types";

export function useFilteredEventGroups(
  events: TimelineEvent[],
  timelineSettings: TimelineSettingsProps,
  width: number
) {
  const filteredEvents = useMemo(
    () =>
      filterEventsByDateRange(
        events,
        timelineSettings.startYear,
        timelineSettings.endYear
      ),
    [events, timelineSettings]
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
    () => radiusInDays(width, filteredMaxDate - filteredMinDate, remInPixels),
    [width, filteredMaxDate, filteredMinDate]
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
