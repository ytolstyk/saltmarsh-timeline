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
  clearEvent: () => void;
};

export function CurrentEventCard({ selectedEvent, clearEvent }: Props) {
  const { deleteEvent } = useEvents();

  if (!selectedEvent) {
    return null;
  }

  const handleDeleteClick = () => {
    deleteEvent(selectedEvent);
    clearEvent();
  };

  return (
    <CurrentEventCardWrapper>
      <div>
        <CurrentCardHeader>{selectedEvent.title}</CurrentCardHeader>
        <CurrentCardDate>
          {convertDaysToReadableDate(selectedEvent.daysSinceOrigin)}
        </CurrentCardDate>
        <CurrentCardText>{selectedEvent.description}</CurrentCardText>
        <CurrentCardDeleteWrapper>
          <button type="button" onClick={handleDeleteClick}>
            Delete
          </button>
          <button type="button" onClick={clearEvent}>
            Close
          </button>
        </CurrentCardDeleteWrapper>
      </div>
    </CurrentEventCardWrapper>
  );
}
