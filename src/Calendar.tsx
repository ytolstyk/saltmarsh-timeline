import { Grid } from "@mantine/core";
import { MONTHS } from "./dateHelper";
import { CalendarMonth } from "./CalendarMonth";

export function Calendar() {
  const renderMonths = () => {
    return MONTHS.map((month, monthIndex) => {
      const [, numDays] = month;
      const span = numDays === 7 ? 6 : 4;
      const offset = numDays === 7 ? 3 : 0;

      return (
        <Grid.Col
          span={{ base: 12, md: span }}
          offset={{ base: 0, md: offset }}
          key={month[0]}
        >
          <CalendarMonth monthIndex={monthIndex} />
        </Grid.Col>
      );
    });
  };

  return <Grid>{renderMonths()}</Grid>;
}
