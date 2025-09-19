import { Button, ButtonGroup, Grid, Paper, Text } from "@mantine/core";
import { DAYS_ABBR, MONTHS } from "./dateHelper";
import { Day } from "./Calendar.styles";
import { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

type Props = {
  monthIndex: number;
  selectedDate?: {
    day: number;
    monthIndex: number;
  } | null;
  allowNavigation?: boolean;
  onClickDay?: (date: { day: number; monthIndex: number }) => void;
};

export function CalendarMonth({
  monthIndex,
  selectedDate,
  allowNavigation,
  onClickDay,
}: Props) {
  const [currentMonth, setCurrentMonth] = useState(monthIndex);
  const month = MONTHS[currentMonth];
  const [monthName, numDays] = month;

  const handleClickDay = (dayIndex: number) => () => {
    if (onClickDay) {
      onClickDay({ day: dayIndex, monthIndex: currentMonth });
    }
  };

  const renderDayLabels = () => {
    return DAYS_ABBR.map((day) => {
      return (
        <Grid.Col span={12 / 7} key={day}>
          <Text size="sm" fw={700} ta="center">
            {day}
          </Text>
        </Grid.Col>
      );
    });
  };

  const renderDayNumbers = (numDays: number) => {
    return new Array(numDays).fill(0).map((_, index) => {
      const dayText = String(index + 1).padStart(2, "0");

      const isSelected =
        selectedDate &&
        selectedDate.day === index &&
        selectedDate.monthIndex === currentMonth;

      return (
        <Grid.Col span={12 / 7} key={index} ta="center">
          <Day
            $isSelected={Boolean(isSelected)}
            onClick={handleClickDay(index)}
          >
            <Text>{dayText}</Text>
          </Day>
        </Grid.Col>
      );
    });
  };

  const renderMonthName = () => {
    if (allowNavigation) {
      return (
        <ButtonGroup mb="md">
          <Button
            variant="default"
            radius="md"
            onClick={() => setCurrentMonth((prev) => Math.max(0, prev - 1))}
          >
            <IconChevronLeft />
          </Button>
          <Button.GroupSection variant="default" flex={1}>
            <Text ta="center" fw={500} size="md">
              {monthName}
            </Text>
          </Button.GroupSection>
          <Button
            variant="default"
            radius="md"
            onClick={() =>
              setCurrentMonth((prev) => Math.min(MONTHS.length - 1, prev + 1))
            }
          >
            <IconChevronRight />
          </Button>
        </ButtonGroup>
      );
    }

    return (
      <Text ta="center" fw={700} size="lg" mb="md">
        {monthName}
      </Text>
    );
  };

  return (
    <Paper p="md" withBorder>
      {renderMonthName()}
      <Grid>
        {renderDayLabels()}
        {renderDayNumbers(numDays)}
      </Grid>
    </Paper>
  );
}
