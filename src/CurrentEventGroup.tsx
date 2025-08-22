import {
  CurrentCardDate,
  CurrentCardHeader,
  CurrentCardText,
  CurrentCardTags,
  CurrentGroupWrapper,
  TagTitle,
  EventContainer,
} from "./CurrentEventGroup.styles";
import { convertDaysToReadableDate } from "./dateHelper";
import { TimelineEvent, TimelineEventGroup } from "./types";
import { RenderIf } from "./RenderIf";
import { useEvents } from "./useEvents";
import { CheckedTags } from "./types";
import { EditEventForm } from "./EditEventForm";
import { BsCalendar3, BsFillTagsFill } from "react-icons/bs";
import { useState } from "react";
import { modals } from "@mantine/modals";
import { Badge, Button, Divider, Flex } from "@mantine/core";

type Props = {
  eventGroup: TimelineEventGroup;
  checkedTags: CheckedTags;
};

export function CurrentEventGroup({ eventGroup, checkedTags }: Props) {
  const [editEventsList, setEditEventsList] = useState<Set<string>>(new Set());
  const [currentEventGroup, setCurrentEventGroup] =
    useState<TimelineEventGroup>(eventGroup);
  const { deleteEvent } = useEvents();
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
        <Badge key={tag} color={checkedTags[tag] ? "blue" : "gray"}>
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
        <EventContainer key={timelineEvent.id}>
          <CurrentCardDate>
            <div>
              <BsCalendar3 size={15} />
              {convertDaysToReadableDate(timelineEvent.daysSinceOrigin)}
            </div>
            <RenderIf condition={events.length > 1}>
              <div>
                {index + 1}/{events.length}
              </div>
            </RenderIf>
          </CurrentCardDate>
          <CurrentCardHeader>{timelineEvent.title}</CurrentCardHeader>
          <CurrentCardText>{timelineEvent.description}</CurrentCardText>
          <RenderIf
            condition={Boolean(
              timelineEvent.tags && timelineEvent.tags.length > 0
            )}
          >
            <TagTitle>
              <BsFillTagsFill size={15} /> Tags:
            </TagTitle>
            <CurrentCardTags>{renderTags(timelineEvent)}</CurrentCardTags>
          </RenderIf>
          <Flex justify="flex-end" mt="md" gap="md">
            <Button
              variant="default"
              onClick={handleDeleteClick(timelineEvent)}
            >
              Delete
            </Button>
            <Button
              variant="default"
              onClick={handleEditClick(timelineEvent.id)}
            >
              Edit
            </Button>
          </Flex>
          <RenderIf condition={index < events.length - 1}>
            <Divider />
          </RenderIf>
        </EventContainer>
      );
    });
  };

  return <CurrentGroupWrapper>{renderEvents()}</CurrentGroupWrapper>;
}
