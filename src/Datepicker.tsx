import { Button, InputLabel, Menu } from "@mantine/core";
import { daysOptionsNumToDayName, MONTHS } from "./dateHelper";
import { CalendarMonth } from "./CalendarMonth";

type Props = {
  onChange: (date: { day: number; monthIndex: number }) => void;
  value?: { day: number; monthIndex: number } | null;
};

export function Datepicker({ onChange, value }: Props) {
  const monthIndex = value ? value.monthIndex : 0;
  const label = value
    ? `${String(value.day + 1).padStart(2, "0")} - ${daysOptionsNumToDayName(value.day)}, ${MONTHS[value.monthIndex][0]}`
    : "Select date";

  return (
    <Menu shadow="md" width={400}>
      <InputLabel>Date</InputLabel>
      <Menu.Target>
        <Button fullWidth variant="default">
          {label}
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <CalendarMonth
          monthIndex={monthIndex}
          selectedDate={value}
          onClickDay={onChange}
          allowNavigation
        />
      </Menu.Dropdown>
    </Menu>
  );
}
