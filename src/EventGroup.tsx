import {
  EventGroupDate,
  EventGroupHeader,
  EventGroupPosition,
  EventGroupTags,
  EventGroupText,
  HeaderCounter,
  HeaderWrapper,
} from "./EventGroup.styles";
import { RenderIf } from "./RenderIf";
import { convertDaysToReadableDate } from "./dateHelper";
import { TimelineEventGroup, TimelineEvent, CheckedTags } from "./types";
import { CurrentEventGroup } from "./CurrentEventGroup";
import { modals } from "@mantine/modals";
import { Badge, Divider, Paper, ScrollArea } from "@mantine/core";

type Props = {
  timelineEventGroup: TimelineEventGroup;
  index: number;
  percentTop: number;
  isHighlighted: boolean;
  checkedTags: CheckedTags;
  setHighlightedIndex: (index: number | null) => void;
};

export function EventGroup({
  timelineEventGroup,
  index,
  percentTop,
  isHighlighted,
  checkedTags,
  setHighlightedIndex,
}: Props) {
  if (!timelineEventGroup) {
    return null;
  }

  const { events } = timelineEventGroup;

  const handleGroupClick = () => {
    modals.open({
      title: `Event Group (${timelineEventGroup.events.length})`,
      size: "lg",
      children: (
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
      if (!tag) {
        return null;
      }

      return (
        <Badge key={tag} color={checkedTags[tag] ? "blue" : "gray"}>
          {tag}
        </Badge>
      );
    });
  };

  const renderEvents = () => {
    if (events.length === 0) {
      return null;
    }

    return events.map((timelineEvent, index) => {
      return (
        <div key={index}>
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
            <Divider mt="md" mb="md" />
          </RenderIf>
        </div>
      );
    });
  };

  return (
    <EventGroupPosition
      $percentTop={percentTop}
      $isHighlighted={isHighlighted}
      onMouseEnter={() => setHighlightedIndex(index)}
      onMouseLeave={() => setHighlightedIndex(null)}
      onClick={handleGroupClick}
    >
      <Paper shadow="sm" p="md" withBorder>
        <ScrollArea.Autosize mah={160}>{renderEvents()}</ScrollArea.Autosize>
      </Paper>
    </EventGroupPosition>
  );
}
