import { useState, ChangeEvent, SyntheticEvent } from "react";
import { DateWrapper, Form, FormContainer } from "./EventForm.styles";
import { TimelineEvent } from "./types";
import {
  convertInputToDays,
  daysOptionsNumToDayName,
  MONTHS,
} from "./dateHelper";
import { useEvents } from "./useEvents";
import { v4 as uuid } from "uuid";

type FormData = Omit<TimelineEvent, "id">;

const initialFormData: FormData = {
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
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const { addEvent } = useEvents();

  const handleDateChange =
    (key: keyof typeof date) =>
    (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      const value = parseInt(event.currentTarget.value) || 0;
      setDate({
        ...date,
        [key]: value,
      });
    };

  const handleMonthChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.currentTarget.value) || 0;
    const maxDaysInMonth = MONTHS[value][1];
    const days = maxDaysInMonth < date.days ? 1 : date.days;

    setDate((prevDate) => ({
      ...prevDate,
      months: value,
      days,
    }));
  };

  const handleInputChange =
    (key: keyof typeof formData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [key]: event.currentTarget.value });
    };

  const handleTagsInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    setFormData({
      ...formData,
      tags: value ? value.split("|") : [],
    });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    addEvent({
      ...formData,
      tags: formData.tags?.map((val) => val.trim()).filter((val) => val !== ""),
      daysSinceOrigin: convertInputToDays(date),
      id: uuid(),
    });

    setFormData(initialFormData);
    setDate(initialDate);
  };

  const renderDayOptions = () => {
    const options = [];
    for (let i = 0; i < MONTHS[date.months][1]; i++) {
      options.push(
        <option key={i} value={i + 1}>
          {i + 1} - {daysOptionsNumToDayName(i)}
        </option>
      );
    }

    return options;
  };

  const renderMonthOptions = () => {
    return MONTHS.map((month, index) => {
      return (
        <option key={month[0]} value={index}>
          {index + 1} - {month[0]}
        </option>
      );
    });
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <DateWrapper>
          <select value={date.days} onChange={handleDateChange("days")}>
            {renderDayOptions()}
          </select>
          <select value={date.months} onChange={handleMonthChange}>
            {renderMonthOptions()}
          </select>
          <input
            placeholder="Year"
            value={date.years}
            onChange={handleDateChange("years")}
            type="number"
          />
        </DateWrapper>
        <input
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange("title")}
        />
        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange("description")}
        />
        <input
          placeholder="Tags separated by |"
          value={formData.tags?.join("|")}
          onChange={handleTagsInputChange}
        />
        <button onClick={handleSubmit}>Add</button>
      </Form>
    </FormContainer>
  );
}
