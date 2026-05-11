import { Grid, Text } from "@mantine/core";
import { MONTHS } from "./dateHelper";
import { CalendarMonth } from "./CalendarMonth";

export function Calendar() {
  const renderMonths = () => {
    return MONTHS.map((month, monthIndex) => {
      const [, numDays] = month;
      const isSpecialWeek = numDays === 7;

      return (
        <Grid.Col
          span={{ base: 12, sm: 6, md: isSpecialWeek ? 6 : 4 }}
          offset={{ base: 0, md: isSpecialWeek ? 3 : 0 }}
          key={month[0]}
        >
          <CalendarMonth monthIndex={monthIndex} />
        </Grid.Col>
      );
    });
  };

  return (
    <>
      <Text size="xs" fw={600} tt="uppercase" c="blue.5" mb="md" style={{ letterSpacing: "0.08em" }}>
        Greyhawk Calendar — Oerth
      </Text>
      <Grid gutter="md">{renderMonths()}</Grid>
    </>
  );
}
