import {
  Divider,
  EventGroupDate,
  EventGroupHeader,
  EventGroupTag,
  EventGroupTags,
  EventGroupText,
  EventGroupWrapper,
  Group,
  HeaderCounter,
  HeaderWrapper,
} from "./EventGroup.styles";
import { RenderIf } from "./RenderIf";
import { convertDaysToReadableDate } from "./dateHelper";
import { openModal } from "./modalHelper";
import { TimelineEventGroup, TimelineEvent, CheckedTags } from "./types";
import { CurrentEventGroup } from "./CurrentEventGroup";

type Props = {
  timelineEventGroup: TimelineEventGroup;
  index: number;
  percentLeft: number;
  isHighlighted: boolean;
  checkedTags: CheckedTags;
  setHighlightedIndex: (index: number | null) => void;
};

export function EventGroup({
  timelineEventGroup,
  index,
  percentLeft,
  isHighlighted,
  checkedTags,
  setHighlightedIndex,
}: Props) {
  if (!timelineEventGroup) {
    return null;
  }

  const { events } = timelineEventGroup;

  const handleGroupClick = () => {
    openModal({
      contentComponent: (
        <CurrentEventGroup
          eventGroup={timelineEventGroup}
          checkedTags={checkedTags}
        />
      ),
    });
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
        <Group key={index} $showHover={events.length > 1}>
          <HeaderWrapper>
            <EventGroupHeader>{timelineEvent.title}</EventGroupHeader>
            <RenderIf condition={events.length > 1}>
              <HeaderCounter>
                {index + 1}/{events.length}
              </HeaderCounter>
            </RenderIf>
          </HeaderWrapper>
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
      onClick={handleGroupClick}
    >
      {renderEvents()}
    </EventGroupWrapper>
  );
}
