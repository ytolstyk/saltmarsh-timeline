import { useState, ChangeEvent, SyntheticEvent } from "react";
import { Form } from "./EventForm.styles";
import { TimelineFormEvent } from "./types";
import { convertInputToDays, MONTHS } from "./dateHelper";
import { useEvents } from "./useEvents";
import {
  Button,
  Fieldset,
  Grid,
  NumberInput,
  TagsInput,
  Textarea,
  TextInput,
} from "@mantine/core";
import { modals } from "@mantine/modals";
import { Datepicker } from "./Datepicker";

const initialFormData: TimelineFormEvent = {
  daysSinceOrigin: 0,
  title: "",
  description: "",
  tags: [],
};
const initialDate = {
  years: 0,
  months: 0,
  days: 0,
};

export function EventForm() {
  const [date, setDate] = useState(initialDate);
  const [formData, setFormData] = useState<TimelineFormEvent>(initialFormData);
  const { addEvent } = useEvents();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleDatepickerChange = (selectedDate: {
    day: number;
    monthIndex: number;
  }) => {
    setErrors({});

    setDate((prevDate) => ({
      ...prevDate,
      days: selectedDate.day,
      months: selectedDate.monthIndex,
    }));
  };

  const handleYearsChange = (value: number | string) => {
    setDate((prevDate) => ({
      ...prevDate,
      years: Number(value),
    }));
  };

  const handleInputChange =
    (key: keyof typeof formData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [key]: event.currentTarget.value });
    };

  const handleTagsInputChange = (tags: string[]) => {
    setFormData({
      ...formData,
      tags,
    });
  };

  const isValid = () => {
    setErrors({});
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (date.years < 0) {
      newErrors.years = "Year cannot be negative";
    }

    if (date.months < 0 || date.months >= MONTHS.length) {
      newErrors.months = "Invalid month selected";
    }

    if (date.days < 0 || date.days > MONTHS[date.months][1]) {
      newErrors.days = `Day must be between 1 and ${MONTHS[date.months][1]}`;
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (!isValid()) {
      return;
    }

    addEvent({
      ...formData,
      tags: formData.tags?.map((val) => val.trim()).filter((val) => val !== ""),
      daysSinceOrigin: convertInputToDays(date),
    });

    setFormData(initialFormData);
    setDate(initialDate);
    modals.closeAll();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Fieldset legend="Date">
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
              onChange={handleYearsChange}
              error={errors.years}
            />
          </Grid.Col>
        </Grid>
      </Fieldset>
      <Fieldset legend="Event Details">
        <TextInput
          label="Title"
          placeholder="Name of the event"
          value={formData.title}
          onChange={handleInputChange("title")}
          error={errors.title}
        />
        <Textarea
          label="Description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange("description")}
          mt="md"
          error={errors.description}
        />
        <TagsInput
          label="Tags"
          placeholder="Tags will be used to filter events"
          value={formData.tags}
          onChange={handleTagsInputChange}
          mt="md"
          error={errors.tags}
        />
      </Fieldset>
      <Button variant="primary" onClick={handleSubmit}>
        Add Event
      </Button>
    </Form>
  );
}
