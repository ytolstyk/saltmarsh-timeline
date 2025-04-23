import {
  Divider,
  EventGroupDate,
  EventGroupHeader,
  EventGroupTag,
  EventGroupTags,
  EventGroupText,
  EventGroupWrapper,
  Group,
} from "./EventGroup.styles";
import { RenderIf } from "./RenderIf";
import { convertDaysToReadableDate } from "./dateHelper";
import { TimelineEventGroup, TimelineEvent, CheckedTags } from "./types";

type Props = {
  timelineEventGroup: TimelineEventGroup;
  index: number;
  percentLeft: number;
  isHighlighted: boolean;
  checkedTags: CheckedTags;
  onCardClick: (event: TimelineEvent) => void;
  setHighlightedIndex: (index: number | null) => void;
};

export function EventGroup({
  timelineEventGroup,
  index,
  percentLeft,
  isHighlighted,
  checkedTags,
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

  const renderTags = (timelineEvent: TimelineEvent) => {
    if (!timelineEvent.tags) {
      return null;
    }

    return timelineEvent.tags.map((tag) => {
      return (
        <EventGroupTag key={tag} $isSelected={checkedTags[tag]}>
          {tag}
        </EventGroupTag>
      );
    });
  };

  const renderEvents = () => {
    if (events.length === 0) {
      return null;
    }

    return events.map((timelineEvent, index) => {
      return (
        <Group
          key={index}
          onClick={handleCardClick(timelineEvent)}
          $showHover={events.length > 1}
        >
          <EventGroupHeader>{timelineEvent.title}</EventGroupHeader>
          <EventGroupDate>
            {convertDaysToReadableDate(timelineEvent.daysSinceOrigin)}
          </EventGroupDate>
          <EventGroupText>{timelineEvent.description}</EventGroupText>
          <RenderIf
            condition={Boolean(
              timelineEvent.tags && timelineEvent.tags.length > 0
            )}
          >
            <EventGroupTags>{renderTags(timelineEvent)}</EventGroupTags>
          </RenderIf>
          <RenderIf condition={index < events.length - 1}>
            <Divider />
          </RenderIf>
        </Group>
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
