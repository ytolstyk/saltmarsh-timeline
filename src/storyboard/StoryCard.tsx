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
  const gradient = getFallbackGradient(card.animation);

  return (
    <CardContainer>
      <BackgroundImage $gradient={gradient}>
        {!imgError && (
          <img
            src={new URL(`../assets/images/saltmarsh_storyboard/${card.backgroundImage}`, import.meta.url).href}
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
