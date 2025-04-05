import { useState } from "react";
import { Card } from "./Card";
import { RenderIf } from "./RenderIf";
import {
  Line,
  LineBottom,
  LineDot,
  LineTop,
  LineWrapper,
} from "./Timeline.styles";
import { TimelineEvent } from "./types";
import { useEvents } from "./useEvents";

type Props = {
  onCardClick: (event: TimelineEvent) => void;
};

export function Timeline({ onCardClick }: Props) {
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const { events, minDate, maxDate } = useEvents();
  const offset = minDate;
  const lineLength = maxDate - minDate;

  const renderEventCards = (isEven: boolean) => {
    return events.map((event, index) => {
      if (isEven && index % 2 !== 0) {
        return null;
      }

      if (!isEven && index % 2 === 0) {
        return null;
      }

      return (
        <Card
          key={index}
          timelineEvent={event}
          index={index}
          setHighlightedIndex={setHighlightedIndex}
          isHighlighted={highlightedIndex === index}
          onCardClick={onCardClick}
          percentLeft={((event.daysSinceOrigin - offset) / lineLength) * 100}
        />
      );
    });
  };

  const renderLineDots = () => {
    return events.map((event, index) => {
      const percentLeft = ((event.daysSinceOrigin - offset) / lineLength) * 100;

      return (
        <LineDot
          key={index}
          onClick={() => onCardClick(event)}
          onMouseEnter={() => setHighlightedIndex(index)}
          onMouseLeave={() => setHighlightedIndex(null)}
          $percentLeft={percentLeft}
          $isActive={highlightedIndex === index}
        />
      );
    });
  };

  return (
    <div>
      <RenderIf condition={!events || events.length === 0}>
        <p>No events to display</p>
      </RenderIf>
      <RenderIf condition={events?.length === 1}>
        <LineWrapper>
          <Card
            timelineEvent={events[0]}
            index={0}
            isHighlighted={true}
            setHighlightedIndex={setHighlightedIndex}
            onCardClick={onCardClick}
            percentLeft={50}
          />
        </LineWrapper>
      </RenderIf>
      <RenderIf condition={events?.length > 1}>
        <LineWrapper>
          <LineTop>{renderEventCards(true)}</LineTop>
          <Line>{renderLineDots()}</Line>
          <LineBottom>{renderEventCards(false)}</LineBottom>
        </LineWrapper>
      </RenderIf>
    </div>
  );
}
