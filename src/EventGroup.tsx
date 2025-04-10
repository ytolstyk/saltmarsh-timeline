import {
  Divider,
  EventGroupDate,
  EventGroupHeader,
  EventGroupText,
  EventGroupWrapper,
} from "./EventGroup.styles";
import { RenderIf } from "./RenderIf";
import { convertDaysToReadableDate } from "./dateHelper";
import { TimelineEventGroup, TimelineEvent } from "./types";

type Props = {
  timelineEventGroup: TimelineEventGroup;
  index: number;
  percentLeft: number;
  isHighlighted: boolean;
  onCardClick: (event: TimelineEvent) => void;
  setHighlightedIndex: (index: number | null) => void;
};

export function EventGroup({
  timelineEventGroup,
  index,
  percentLeft,
  isHighlighted,
  onCardClick,
  setHighlightedIndex,
}: Props) {
  if (!timelineEventGroup) {
    return null;
  }

  const { events } = timelineEventGroup;
  const handleCardClick = (event: TimelineEvent) => () => {
    onCardClick(event);
  };

  const renderEvents = () => {
    if (events.length === 0) {
      return null;
    }

    return events.map((timelineEvent, index) => {
      return (
        <div key={index} onClick={handleCardClick(timelineEvent)}>
          <EventGroupHeader>{timelineEvent.title}</EventGroupHeader>
          <EventGroupDate>
            {convertDaysToReadableDate(timelineEvent.daysSinceOrigin)}
          </EventGroupDate>
          <EventGroupText>{timelineEvent.description}</EventGroupText>
          <RenderIf condition={index < events.length - 1}>
            <Divider />
          </RenderIf>
        </div>
      );
    });
  };

  return (
    <EventGroupWrapper
      $percentLeft={percentLeft}
      $isHighlighted={isHighlighted}
      onMouseEnter={() => setHighlightedIndex(index)}
      onMouseLeave={() => setHighlightedIndex(null)}
    >
      {renderEvents()}
    </EventGroupWrapper>
  );
}
