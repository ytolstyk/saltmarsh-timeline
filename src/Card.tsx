import { CardDate, CardHeader, CardText, CardWrapper } from "./Card.styles";
import { convertDaysToReadableDate } from "./dateHelper";
import { TimelineEvent } from "./types";

type Props = {
  timelineEvent: TimelineEvent;
  index: number;
  percentLeft: number;
  isHighlighted: boolean;
  onCardClick: (event: TimelineEvent) => void;
  setHighlightedIndex: (index: number | null) => void;
};

export function Card({
  timelineEvent,
  index,
  percentLeft,
  isHighlighted,
  onCardClick,
  setHighlightedIndex,
}: Props) {
  const handleCardClick = () => {
    onCardClick(timelineEvent);
  };

  return (
    <CardWrapper
      $percentLeft={percentLeft}
      onClick={handleCardClick}
      $isHighlighted={isHighlighted}
      onMouseEnter={() => setHighlightedIndex(index)}
      onMouseLeave={() => setHighlightedIndex(null)}
    >
      <CardHeader>{timelineEvent.title}</CardHeader>
      <CardDate>
        {convertDaysToReadableDate(timelineEvent.daysSinceOrigin)}
      </CardDate>
      <CardText>{timelineEvent.description}</CardText>
    </CardWrapper>
  );
}
