import { useState } from "react";
import { FunFact } from "./storyboardTypes";
import { FlipContainer } from "./FlipWindow.styles";

interface FlipWindowProps {
  fact: FunFact;
}

export const FlipWindow = ({ fact }: FlipWindowProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <FlipContainer $flipped={flipped} onClick={() => setFlipped((f) => !f)}>
      <div className="flip-inner">
        <div className="flip-front">
          <span className="flip-front-icon">📜</span>
          <span className="flip-front-title">{fact.title}</span>
          <span className="flip-front-hint">tap to reveal</span>
        </div>
        <div className="flip-back">
          <div className="flip-back-title">{fact.title}</div>
          <div>{fact.content}</div>
        </div>
      </div>
    </FlipContainer>
  );
};
