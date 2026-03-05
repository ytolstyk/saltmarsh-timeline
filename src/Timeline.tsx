import { useState } from "react";
import { EventGroup } from "./EventGroup";
import { RenderIf } from "./RenderIf";
import {
  Line,
  LineRight,
  LineDot,
  LineLeft,
  LineWrapper,
  lineHeight,
  TimelineWrapper,
} from "./Timeline.styles";
import { TimelineEventGroup } from "./types";
import { useEvents } from "./useEvents";
import { useFilteredEventGroups } from "./useFilteredEventGroups";
import { percentFromTop } from "./timelineHelper";
import { CurrentEventGroup } from "./CurrentEventGroup";
import { Badge, Chip, Group, Paper, Stack, Text, TextInput, Title } from "@mantine/core";
import { modals } from "@mantine/modals";
import { useTimelineSettings } from "./useTimelineSettings";
import { convertDaysToReadableDate } from "./dateHelper";
import { HighlightText } from "./HighlightText";

export function Timeline() {
  const { timelineSettings } = useTimelineSettings();
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const [ungrouped, setUngrouped] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { events } = useEvents();
  const { eventGroups, offset, lineLength, filteredEvents } =
    useFilteredEventGroups(events, timelineSettings, lineHeight, ungrouped, searchQuery);

  const handleGroupClick = (group: TimelineEventGroup) => () => {
    modals.open({
      title: `Event Group (${group.events.length})`,
      size: "lg",
      children: (
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
          percentTop={percentFromTop(group.daysSinceOrigin, offset, lineLength)}
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
          $percentTop={percentFromTop(
            group.daysSinceOrigin,
            offset,
            lineLength
          )}
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
    <TimelineWrapper>
      <RenderIf condition={!noEvents}>
        <TextInput
          placeholder="Search by title, description, or tag…"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.currentTarget.value)}
          mb="md"
        />
      </RenderIf>
      <RenderIf condition={noEvents}>
        <Text ta="center" mt="2rem">
          There are no events in the system. You can import the timeline
          spreadsheet to get started.
        </Text>
      </RenderIf>
      <RenderIf condition={noEventGroups}>
        <Text ta="center" mt="2rem">
          All events are filtered out
        </Text>
      </RenderIf>
      <RenderIf condition={eventGroups?.length > 0 && !noEventGroups}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
          <Chip checked={ungrouped} onChange={setUngrouped}>
            Show all events
          </Chip>
          <Text>
            Showing {filteredEvents.length} of {events.length} total events
          </Text>
        </div>
      </RenderIf>
      <RenderIf condition={ungrouped && eventGroups?.length > 0 && !noEventGroups}>
        <Stack gap="sm">
          {eventGroups.map((group, index) => {
            const event = group.events[0];
            return (
              <Paper key={index} shadow="sm" p="md" withBorder>
                <Text size="sm" c="indigo" fw={700}>
                  {convertDaysToReadableDate(event.daysSinceOrigin)}
                </Text>
                <Title order={5} mt="xs">
                  <HighlightText text={event.title} query={searchQuery} />
                </Title>
                <Text mt="xs">
                  <HighlightText text={event.description} query={searchQuery} />
                </Text>
                {event.tags && event.tags.some(Boolean) && (
                  <Group mt="xs" gap="xs">
                    {event.tags.filter(Boolean).map((tag) => (
                      <Badge key={tag} color={timelineSettings.checkedTags[tag] ? "blue" : "gray"}>
                        {tag}
                      </Badge>
                    ))}
                  </Group>
                )}
              </Paper>
            );
          })}
        </Stack>
      </RenderIf>
      <RenderIf condition={!ungrouped && eventGroups?.length === 1}>
        <LineWrapper $noHeight>
          <EventGroup
            timelineEventGroup={eventGroups[0]}
            index={0}
            isHighlighted={true}
            setHighlightedIndex={setHighlightedIndex}
            checkedTags={timelineSettings.checkedTags}
            percentTop={50}
          />
        </LineWrapper>
      </RenderIf>
      <RenderIf condition={!ungrouped && eventGroups?.length > 1}>
        <LineWrapper>
          <LineLeft>{renderEventCards(true)}</LineLeft>
          <Line>{renderLineDots()}</Line>
          <LineRight>{renderEventCards(false)}</LineRight>
        </LineWrapper>
      </RenderIf>
    </TimelineWrapper>
  );
}
