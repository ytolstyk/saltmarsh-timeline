import {
  CurrentCardDate,
  CurrentCardDeleteWrapper,
  CurrentCardHeader,
  CurrentCardText,
  CurrentEventCardWrapper,
} from "./CurrentEventCard.styles";
import { convertDaysToReadableDate } from "./dateHelper";
import { TimelineEvent } from "./types";
import { useEvents } from "./useEvents";

type Props = {
  selectedEvent: TimelineEvent | null;
};

export function CurrentEventCard({ selectedEvent }: Props) {
  const { deleteEvent } = useEvents();

  if (!selectedEvent) {
    return null;
  }

  return (
    <CurrentEventCardWrapper>
      <CurrentCardHeader>{selectedEvent.title}</CurrentCardHeader>
      <CurrentCardDate>
        {convertDaysToReadableDate(selectedEvent.daysSinceOrigin)}
      </CurrentCardDate>
      <CurrentCardText>{selectedEvent.description}</CurrentCardText>
      <CurrentCardDeleteWrapper>
        <button type="button" onClick={() => deleteEvent(selectedEvent)}>
          Delete
        </button>
      </CurrentCardDeleteWrapper>
    </CurrentEventCardWrapper>
  );
}
