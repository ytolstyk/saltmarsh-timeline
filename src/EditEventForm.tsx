import { TimelineEvent } from "./types";
import { CurrentCardDate } from "./CurrentEventGroup.styles";
import { convertDaysToReadableDate } from "./dateHelper";
import { RenderIf } from "./RenderIf";
import { EditEventFormContainer } from "./EditEventForm.styles";
import { useEvents } from "./useEvents";
import { useState, ChangeEvent } from "react";
import {
  Button,
  Divider,
  Flex,
  TagsInput,
  Textarea,
  TextInput,
} from "@mantine/core";

type Props = {
  event: TimelineEvent;
  renderDivider: boolean;
  onSaveClick: (event: TimelineEvent) => void;
  onCancelClick: (eventId: string) => void;
};

export function EditEventForm({
  event,
  renderDivider,
  onSaveClick,
  onCancelClick,
}: Props) {
  const [formEvent, setFormEvent] = useState<{
    title: string;
    description: string;
    tags: string[];
  }>({
    title: event.title,
    description: event.description,
    // @ts-expect-error i refuse to believe this will be null
    tags: event.tags?.filter(Boolean) || [],
  });
  const { updateEvent } = useEvents();

  const handleSaveClick = async () => {
    const newEvent = {
      ...event,
      title: formEvent.title,
      description: formEvent.description,
      tags: formEvent.tags.map((tag) => tag?.trim()).filter(Boolean),
    } as TimelineEvent;

    if (!(await updateEvent(newEvent))) {
      return;
    }

    onSaveClick(newEvent);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;

    setFormEvent((prevFormEvent) => ({
      ...prevFormEvent,
      [name]: value,
    }));
  };

  const handleTagsChange = (tags: string[]) => {
    setFormEvent((prevFormEvent) => ({
      ...prevFormEvent,
      tags,
    }));
  };

  return (
    <EditEventFormContainer>
      <CurrentCardDate>
        {convertDaysToReadableDate(event.daysSinceOrigin)}
      </CurrentCardDate>
      <TextInput
        value={formEvent.title}
        label="Title"
        placeholder="Enter event title"
        name="title"
        onChange={handleInputChange}
      />
      <Textarea
        name="description"
        label="Description"
        placeholder="Enter event description"
        onChange={handleInputChange}
        value={formEvent.description}
      />
      <TagsInput
        label="Tags"
        value={formEvent.tags}
        onChange={handleTagsChange}
      />
      <Flex justify="flex-end" mt="md" gap="md">
        <Button variant="default" onClick={() => onCancelClick(event.id)}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSaveClick}>
          Save
        </Button>
      </Flex>
      <RenderIf condition={renderDivider}>
        <Divider />
      </RenderIf>
    </EditEventFormContainer>
  );
}
