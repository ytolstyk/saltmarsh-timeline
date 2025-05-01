import { TimelineEvent } from "./types";
import { CurrentCardDate, TagTitle } from "./CurrentEventGroup.styles";
import { Divider } from "./EventGroup.styles";
import { convertDaysToReadableDate } from "./dateHelper";
import { RenderIf } from "./RenderIf";
import {
  ButtonWrapper,
  EditEventFormContainer,
  EditTextArea,
  TextInput,
} from "./EditEventForm.styles";
import { useEvents } from "./useEvents";
import { useState, ChangeEvent } from "react";

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
    tags: string;
  }>({
    title: event.title,
    description: event.description,
    tags: event.tags?.join(", ") || "",
  });
  const { updateEvent } = useEvents();

  const handleSaveClick = () => {
    const newEvent = {
      ...event,
      title: formEvent.title,
      description: formEvent.description,
      tags: formEvent.tags.split(",").map((tag) => tag.trim()),
    };

    updateEvent(newEvent);
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

  return (
    <EditEventFormContainer>
      <CurrentCardDate>
        {convertDaysToReadableDate(event.daysSinceOrigin)}
      </CurrentCardDate>
      <TextInput
        type="text"
        value={formEvent.title}
        name="title"
        onChange={handleInputChange}
      />
      <EditTextArea
        name="description"
        onChange={handleInputChange}
        value={formEvent.description}
      />
      <TagTitle>Tags:</TagTitle>
      <TextInput
        type="text"
        value={formEvent.tags}
        name="tags"
        onChange={handleInputChange}
      />
      <ButtonWrapper>
        <button type="button" onClick={() => onCancelClick(event.id)}>
          Cancel
        </button>
        <button type="button" onClick={handleSaveClick}>
          Save
        </button>
      </ButtonWrapper>
      <RenderIf condition={renderDivider}>
        <Divider />
      </RenderIf>
    </EditEventFormContainer>
  );
}
