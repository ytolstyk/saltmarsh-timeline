import { useState } from "react";
import { EventGroup } from "./EventGroup";
import { RenderIf } from "./RenderIf";
import {
  EmptyMessageWrapper,
  Line,
  LineBottom,
  LineDot,
  LineTop,
  LineWrapper,
  EventCounter,
} from "./Timeline.styles";
import { TimelineEventGroup, TimelineSettingsData } from "./types";
import { useEvents } from "./useEvents";
import { useWidth } from "./useWidth";
import { useFilteredEventGroups } from "./useFilteredEventGroups";
import { remInPixels } from "./App.styles";
import { percentLeft } from "./timelineHelper";
import { openModal } from "./modalHelper";
import { JSONModal } from "./JSONModal";
import { convertJSONDataToBlobs } from "./jsonHelper";
import jsonFile from "./assets/saltmarsh_timeline.json";
import { CurrentEventGroup } from "./CurrentEventGroup";

type Props = {
  timelineSettings: TimelineSettingsData;
};

export function Timeline({ timelineSettings }: Props) {
  const { elementRef, width } = useWidth(remInPixels * 10);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const { events } = useEvents();
  const { eventGroups, offset, lineLength, filteredEvents } =
    useFilteredEventGroups(events, timelineSettings, width);

  const handleSeedClick = () => {
    openModal({
      contentComponent: (
        <JSONModal initialData={convertJSONDataToBlobs(jsonFile)} />
      ),
    });
  };

  const handleGroupClick = (group: TimelineEventGroup) => () => {
    openModal({
      contentComponent: (
        <CurrentEventGroup
          eventGroup={group}
          checkedTags={timelineSettings.checkedTags}
        />
      ),
    });
  };

  const renderEventCards = (isEven: boolean) => {
    return eventGroups.map((group, index) => {
      if (isEven && index % 2 !== 0) {
        return null;
      }

      if (!isEven && index % 2 === 0) {
        return null;
      }

      return (
        <EventGroup
          key={index}
          timelineEventGroup={group}
          index={index}
          setHighlightedIndex={setHighlightedIndex}
          isHighlighted={highlightedIndex === index}
          checkedTags={timelineSettings.checkedTags}
          percentLeft={percentLeft(group.daysSinceOrigin, offset, lineLength)}
        />
      );
    });
  };

  const renderLineDots = () => {
    return eventGroups.map((group, index) => {
      const numEvents = group.events.length > 1 ? group.events.length : "";

      return (
        <LineDot
          key={index}
          onClick={handleGroupClick(group)}
          onMouseEnter={() => setHighlightedIndex(index)}
          onMouseLeave={() => setHighlightedIndex(null)}
          $percentLeft={percentLeft(group.daysSinceOrigin, offset, lineLength)}
          $isGroup={group.events.length > 1}
          $isActive={highlightedIndex === index}
        >
          {numEvents}
        </LineDot>
      );
    });
  };

  const noEvents = !events || events.length === 0;
  const noEventGroups = !noEvents && (!eventGroups || eventGroups.length === 0);

  return (
    <div ref={elementRef}>
      <RenderIf condition={noEvents}>
        <EmptyMessageWrapper>
          <div>
            There are no events in the system. You can import the timeline
            spreadsheet to get started.
          </div>
          <button onClick={handleSeedClick}>Get started</button>
        </EmptyMessageWrapper>
      </RenderIf>
      <RenderIf condition={noEventGroups}>
        <EmptyMessageWrapper>All events are filtered out</EmptyMessageWrapper>
      </RenderIf>
      <RenderIf condition={eventGroups?.length === 1}>
        <LineWrapper>
          <EventGroup
            timelineEventGroup={eventGroups[0]}
            index={0}
            isHighlighted={true}
            setHighlightedIndex={setHighlightedIndex}
            checkedTags={timelineSettings.checkedTags}
            percentLeft={50}
          />
        </LineWrapper>
      </RenderIf>
      <RenderIf condition={eventGroups?.length > 1}>
        <EventCounter>
          Showing {filteredEvents.length} of {events.length} total events
        </EventCounter>
        <LineWrapper>
          <LineTop>{renderEventCards(true)}</LineTop>
          <Line>{renderLineDots()}</Line>
          <LineBottom>{renderEventCards(false)}</LineBottom>
        </LineWrapper>
      </RenderIf>
    </div>
  );
}
