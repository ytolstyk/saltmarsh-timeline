import { useState } from "react";
import { StoryCardData } from "./storyboardTypes";
import { AnimationOverlay } from "./animations/AnimationOverlay";
import { FlipWindow } from "./FlipWindow";
import {
  CardContainer,
  BackgroundImage,
  ContentOverlay,
  SessionBadge,
  BookmarkButton,
  CardTitle,
  StoryText,
  FunFactsRow,
  ChapterNumber,
  ToggleTextButton,
  getFallbackGradient,
} from "./StoryCard.styles";

interface StoryCardProps {
  card: StoryCardData;
  isActive: boolean;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

export const StoryCard = ({
  card,
  isActive,
  isBookmarked,
  onToggleBookmark,
}: StoryCardProps) => {
  const [imgError, setImgError] = useState(false);
  const [textVisible, setTextVisible] = useState(true);
  const gradient = getFallbackGradient(card.animation[0] ?? "none");
  const isRocking = card.animation.includes("ship-rocking");
  const isShaking = card.animation.includes("battle-shake");

  return (
    <CardContainer>
      <BackgroundImage $gradient={gradient} $rocking={isRocking} $shaking={isShaking}>
        {!imgError && (
          <img
            src={`https://saltmarsh-files.s3.us-west-1.amazonaws.com/storybook/saltmarsh/${card.backgroundImage}`}
            alt=""
            onError={() => setImgError(true)}
            loading="lazy"
          />
        )}
      </BackgroundImage>

      <AnimationOverlay animation={card.animation} isActive={isActive} />

      <SessionBadge>Session {card.session}</SessionBadge>

      <BookmarkButton
        $active={isBookmarked}
        onClick={(e) => {
          e.stopPropagation();
          onToggleBookmark();
        }}
        aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
      >
        {isBookmarked ? "★" : "☆"}
      </BookmarkButton>

      {textVisible && (
        <ContentOverlay>
          <ChapterNumber>Chapter {card.chapter}</ChapterNumber>
          <CardTitle>{card.title}</CardTitle>
          <StoryText>{card.story}</StoryText>
          {card.funFacts.length > 0 && (
            <FunFactsRow>
              {card.funFacts.map((fact, i) => (
                <FlipWindow key={i} fact={fact} />
              ))}
            </FunFactsRow>
          )}
        </ContentOverlay>
      )}

      <ToggleTextButton
        onClick={(e) => {
          e.stopPropagation();
          setTextVisible((v) => !v);
        }}
        aria-label={textVisible ? "Hide text" : "Show text"}
      >
        {textVisible ? "👁" : "👁‍🗨"}
      </ToggleTextButton>
    </CardContainer>
  );
};
