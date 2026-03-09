import { convertDaysToReadableDate } from "./dateHelper";
import { TimelineEvent, TimelineEventGroup } from "./types";
import { RenderIf } from "./RenderIf";
import { useEvents } from "./useEvents";
import { CheckedTags } from "./types";
import { EditEventForm } from "./EditEventForm";
import { useState } from "react";
import { modals } from "@mantine/modals";
import { Badge, Divider, Flex, Group, Stack, Text, Title } from "@mantine/core";
import { useUserRole } from "./UserRoleContext";
import { LockedButton } from "./LockedButton";

type Props = {
  eventGroup: TimelineEventGroup;
  checkedTags: CheckedTags;
};

export function CurrentEventGroup({ eventGroup, checkedTags }: Props) {
  const [editEventsList, setEditEventsList] = useState<Set<string>>(new Set());
  const [currentEventGroup, setCurrentEventGroup] =
    useState<TimelineEventGroup>(eventGroup);
  const { deleteEvent } = useEvents();
  const { isAdmin, isGuest } = useUserRole();
  const lockedReason = isGuest ? "Sign in to enable" : "Admin access required";
  const { events } = currentEventGroup;

  const handleDeleteClick = (event: TimelineEvent) => async () => {
    const currentEvents = currentEventGroup.events.filter(
      (currentEvent) => currentEvent.id !== event.id
    );
    const newEventGroup = {
      ...currentEventGroup,
      events: currentEvents,
    };

    if (!(await deleteEvent(event.id))) {
      return;
    }

    setCurrentEventGroup(newEventGroup);

    if (currentEvents.length === 0) {
      modals.closeAll();
    }
  };

  const handleEditClick = (eventId: string) => () => {
    const newEditEventsList = new Set(editEventsList);
    newEditEventsList.add(eventId);

    setEditEventsList(newEditEventsList);
  };

  const handleCancelClick = (eventId: string) => {
    const newEditEventsList = new Set(editEventsList);
    newEditEventsList.delete(eventId);

    setEditEventsList(newEditEventsList);
  };

  const handleSaveClick = (newEvent: TimelineEvent) => {
    const newEditEventsList = new Set(editEventsList);
    newEditEventsList.delete(newEvent.id);

    setEditEventsList(newEditEventsList);
    setCurrentEventGroup((prev) => ({
      ...prev,
      events: prev.events.map((event) =>
        event.id === newEvent.id ? newEvent : event
      ),
    }));
  };

  const renderTags = (timelineEvent: TimelineEvent) => {
    if (!timelineEvent.tags) {
      return null;
    }

    return timelineEvent.tags.sort().map((tag) => {
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
    return events.map((timelineEvent, index) => {
      if (editEventsList.has(timelineEvent.id)) {
        return (
          <EditEventForm
            key={timelineEvent.id}
            event={timelineEvent}
            renderDivider={index < events.length - 1}
            onSaveClick={handleSaveClick}
            onCancelClick={handleCancelClick}
          />
        );
      }

      return (
        <Stack key={timelineEvent.id} gap="xs">
          <Flex justify="space-between" align="center">
            <Text
              size="xs"
              fw={600}
              tt="uppercase"
              c="blue.6"
              style={{ letterSpacing: "0.04em" }}
            >
              {convertDaysToReadableDate(timelineEvent.daysSinceOrigin)}
            </Text>
            <RenderIf condition={events.length > 1}>
              <Badge variant="light" color="gray" size="sm" radius="sm">
                {index + 1} / {events.length}
              </Badge>
            </RenderIf>
          </Flex>
          <Title order={5} lh={1.3}>{timelineEvent.title}</Title>
          <Text size="sm" c="gray.7">{timelineEvent.description}</Text>
          <RenderIf condition={Boolean(timelineEvent.tags && timelineEvent.tags.length > 0)}>
            <Group gap="xs">
              {renderTags(timelineEvent)}
            </Group>
          </RenderIf>
          <Flex justify="space-between" align="center" mt="xs">
            <LockedButton
              locked={!isAdmin}
              lockedReason={lockedReason}
              variant="subtle"
              color="red"
              size="xs"
              onClick={handleDeleteClick(timelineEvent)}
            >
              Delete
            </LockedButton>
            <LockedButton
              locked={!isAdmin}
              lockedReason={lockedReason}
              variant="light"
              color="blue"
              size="xs"
              onClick={handleEditClick(timelineEvent.id)}
            >
              Edit
            </LockedButton>
          </Flex>
          <RenderIf condition={index < events.length - 1}>
            <Divider mt="xs" />
          </RenderIf>
        </Stack>
      );
    });
  };

  return <Stack gap="2rem">{renderEvents()}</Stack>;
}
