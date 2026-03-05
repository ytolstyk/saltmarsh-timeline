import { TimelineEvent } from "./types";
import {
  convertDaysToDateObject,
  convertInputToDays,
  isPrehistory,
  PREHISTORY_DAYS,
} from "./dateHelper";
import { RenderIf } from "./RenderIf";
import { EditEventFormContainer } from "./EditEventForm.styles";
import { useEvents } from "./useEvents";
import { useState, ChangeEvent } from "react";
import {
  Button,
  Checkbox,
  Divider,
  Fieldset,
  Flex,
  Grid,
  NumberInput,
  TagsInput,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { Datepicker } from "./Datepicker";

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
  const prehistoric0 = isPrehistory(event.daysSinceOrigin);
  const dateObj0 = prehistoric0 ? null : convertDaysToDateObject(event.daysSinceOrigin);

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
  const [prehistoric, setPrehistoric] = useState(prehistoric0);
  const [date, setDate] = useState({
    years: dateObj0?.years ?? 0,
    months: dateObj0?.months ?? 0,
    days: dateObj0 ? dateObj0.days - 1 : 0, // Datepicker uses 0-indexed days
  });
  const { updateEvent } = useEvents();

  const handleSaveClick = async () => {
    const newEvent = {
      ...event,
      title: formEvent.title,
      description: formEvent.description,
      tags: formEvent.tags.map((tag) => tag?.trim()).filter(Boolean),
      daysSinceOrigin: prehistoric ? PREHISTORY_DAYS : convertInputToDays(date),
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

  const handleDatepickerChange = (selected: { day: number; monthIndex: number }) => {
    setDate((prev) => ({ ...prev, days: selected.day, months: selected.monthIndex }));
  };

  return (
    <EditEventFormContainer>
      <Checkbox
        label="Pre-History event (no specific date)"
        checked={prehistoric}
        onChange={(e) => setPrehistoric(e.currentTarget.checked)}
        mb="xs"
      />
      {!prehistoric && (
        <Fieldset legend="Date" mb="xs">
          <Grid gutter="sm">
            <Grid.Col span={9}>
              <Datepicker
                onChange={handleDatepickerChange}
                value={{ day: date.days, monthIndex: date.months }}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <NumberInput
                label="Year"
                value={date.years}
                onChange={(v) => setDate((prev) => ({ ...prev, years: Number(v) }))}
              />
            </Grid.Col>
          </Grid>
        </Fieldset>
      )}
      {prehistoric && (
        <Text size="xs" fw={600} tt="uppercase" c="gray.5" mb="xs" style={{ letterSpacing: "0.04em" }}>
          Pre-History
        </Text>
      )}
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
        <Button variant="subtle" color="gray" size="xs" onClick={() => onCancelClick(event.id)}>
          Cancel
        </Button>
        <Button variant="filled" size="xs" onClick={handleSaveClick}>
          Save
        </Button>
      </Flex>
      <RenderIf condition={renderDivider}>
        <Divider />
      </RenderIf>
    </EditEventFormContainer>
  );
}
