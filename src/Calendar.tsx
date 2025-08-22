import { Grid, Paper, Text } from "@mantine/core";
import { DAYS_ABBR, MONTHS } from "./dateHelper";
import { Day } from "./Calendar.styles";

export function Calendar() {
  const renderMonths = () => {
    return MONTHS.map((month) => {
      const [name, numDays] = month;
      const span = numDays === 7 ? 6 : 4;
      const offset = numDays === 7 ? 3 : 0;

      return (
        <Grid.Col
          span={{ base: 12, md: span }}
          offset={{ base: 0, md: offset }}
          key={month[0]}
        >
          <Paper p="md" withBorder>
            <Text ta="center" fw={700} size="lg" mb="md">
              {name}
            </Text>
            <Grid>
              {renderDayLabels()}
              {renderDayNumbers(numDays)}
            </Grid>
          </Paper>
        </Grid.Col>
      );
    });
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
      let dayText = String(index + 1);

      if (dayText.length === 1) {
        dayText = "0" + dayText;
      }

      return (
        <Grid.Col span={12 / 7} key={index} ta="center">
          <Day>
            <Text>{dayText}</Text>
          </Day>
        </Grid.Col>
      );
    });
  };

  return <Grid>{renderMonths()}</Grid>;
}
