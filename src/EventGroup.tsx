import { EventGroupPosition, EventGroupTags } from "./EventGroup.styles";
import { RenderIf } from "./RenderIf";
import { convertDaysToReadableDate } from "./dateHelper";
import { TimelineEventGroup, TimelineEvent, CheckedTags } from "./types";
import { CurrentEventGroup } from "./CurrentEventGroup";
import { modals } from "@mantine/modals";
import { Badge, Divider, Paper, ScrollArea, Text, Title } from "@mantine/core";

type Props = {
  timelineEventGroup: TimelineEventGroup;
  index: number;
  percentTop: number;
  zIndex: number;
  side: "left" | "right";
  isHighlighted: boolean;
  checkedTags: CheckedTags;
  setHighlightedIndex: (index: number | null) => void;
};

export function EventGroup({
  timelineEventGroup,
  index,
  percentTop,
  zIndex,
  side,
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
        <Badge key={tag} variant="light" color={checkedTags[tag] ? "blue" : "gray"} size="sm">
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
      const header =
        events.length > 1
          ? `${index + 1}: ${timelineEvent.title}`
          : timelineEvent.title;

      return (
        <div key={index}>
          <Title order={5} lh={1.3}>{header}</Title>
          <Text mt={4} size="xs" c="blue.6" fw={600} tt="uppercase" style={{ letterSpacing: "0.04em" }}>
            {convertDaysToReadableDate(timelineEvent.daysSinceOrigin)}
          </Text>
          <Text mt="xs" size="sm" c="gray.7">{timelineEvent.description}</Text>
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
      $zIndex={zIndex}
      $side={side}
      onMouseEnter={() => setHighlightedIndex(index)}
      onMouseLeave={() => setHighlightedIndex(null)}
      onClick={handleGroupClick}
    >
      <Paper
        shadow={isHighlighted ? "md" : "xs"}
        p="md"
        withBorder
        style={{
          borderColor: isHighlighted ? "#0063ff40" : undefined,
          transition: "box-shadow 0.18s ease, border-color 0.18s ease",
        }}
      >
        <ScrollArea.Autosize mah={160}>{renderEvents()}</ScrollArea.Autosize>
      </Paper>
    </EventGroupPosition>
  );
}
