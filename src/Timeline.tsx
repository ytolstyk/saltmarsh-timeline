import { useState } from "react";
import { EventGroup } from "./EventGroup";
import { RenderIf } from "./RenderIf";
import {
  Line,
  LineBottom,
  LineDot,
  LineTop,
  LineWrapper,
} from "./Timeline.styles";
import { TimelineEvent, TimelineSettingsProps } from "./types";
import { useEvents } from "./useEvents";
import { useWidth } from "./useWidth";
import { useFilteredEventGroups } from "./useFilteredEventGroups";
import { remInPixels } from "./App.styles";

type Props = {
  onCardClick: (event: TimelineEvent) => void;
  timelineSettings: TimelineSettingsProps;
};

export function Timeline({ onCardClick, timelineSettings }: Props) {
  const { elementRef, width } = useWidth(remInPixels * 10);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const { events } = useEvents();
  const { eventGroups, offset, lineLength } = useFilteredEventGroups(
    events,
    timelineSettings,
    width
  );

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
          onCardClick={onCardClick}
          percentLeft={((group.daysSinceOrigin - offset) / lineLength) * 100}
        />
      );
    });
  };

  const renderLineDots = () => {
    return eventGroups.map((group, index) => {
      const percentLeft = ((group.daysSinceOrigin - offset) / lineLength) * 100;
      const numEvents = group.events.length > 1 ? group.events.length : "";

      return (
        <LineDot
          key={index}
          onClick={() => onCardClick(group.events[0])}
          onMouseEnter={() => setHighlightedIndex(index)}
          onMouseLeave={() => setHighlightedIndex(null)}
          $percentLeft={percentLeft}
          $isGroup={group.events.length > 1}
          $isActive={highlightedIndex === index}
        >
          {numEvents}
        </LineDot>
      );
    });
  };

  return (
    <div ref={elementRef}>
      <RenderIf condition={!eventGroups || eventGroups.length === 0}>
        <p>No events to display</p>
      </RenderIf>
      <RenderIf condition={eventGroups?.length === 1}>
        <LineWrapper>
          <EventGroup
            timelineEventGroup={eventGroups[0]}
            index={0}
            isHighlighted={true}
            setHighlightedIndex={setHighlightedIndex}
            onCardClick={onCardClick}
            percentLeft={50}
          />
        </LineWrapper>
      </RenderIf>
      <RenderIf condition={eventGroups?.length > 1}>
        <LineWrapper>
          <LineTop>{renderEventCards(true)}</LineTop>
          <Line>{renderLineDots()}</Line>
          <LineBottom>{renderEventCards(false)}</LineBottom>
        </LineWrapper>
      </RenderIf>
    </div>
  );
}
