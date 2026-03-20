import { useRef, useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { storyCards } from "./storyboardData";
import { StoryCard } from "./StoryCard";
import { useStoryBookmarks } from "./useStoryBookmarks";
import {
  ScrollContainer,
  BackButton,
  NavDots,
  NavDot,
} from "./Storyboard.styles";

export const Storyboard = () => {
  const { campaignName = "saltmarsh", cardNumber } = useParams();
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const { toggleBookmark, isBookmarked } = useStoryBookmarks(campaignName);

  // Scroll to initial card
  useEffect(() => {
    const num = parseInt(cardNumber || "1", 10);
    const idx = storyCards.findIndex((c) => c.chapter === num);
    const target = idx >= 0 ? idx : 0;

    requestAnimationFrame(() => {
      cardRefs.current[target]?.scrollIntoView({ behavior: "instant" as ScrollBehavior });
      setActiveIndex(target);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // IntersectionObserver for active card tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = cardRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (idx >= 0) {
              setActiveIndex(idx);
              const card = storyCards[idx];
              window.history.replaceState(
                null,
                "",
                `/story/${campaignName}/${card.chapter}`
              );
            }
          }
        }
      },
      { threshold: 0.6 }
    );

    for (const ref of cardRefs.current) {
      if (ref) observer.observe(ref);
    }

    return () => observer.disconnect();
  }, [campaignName]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        const next = Math.min(activeIndex + 1, storyCards.length - 1);
        cardRefs.current[next]?.scrollIntoView({ behavior: "smooth" });
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        const prev = Math.max(activeIndex - 1, 0);
        cardRefs.current[prev]?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeIndex]);

  const scrollToCard = useCallback((idx: number) => {
    cardRefs.current[idx]?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <ScrollContainer ref={scrollRef}>
        {storyCards.map((card, i) => (
          <div
            key={card.id}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
          >
            <StoryCard
              card={card}
              isActive={i === activeIndex}
              isBookmarked={isBookmarked(card.id)}
              onToggleBookmark={() => toggleBookmark(card.id)}
            />
          </div>
        ))}
      </ScrollContainer>

      <BackButton onClick={() => navigate(`/story/${campaignName}`)}>
        ← All Chapters
      </BackButton>

      <NavDots>
        {storyCards.map((card, i) => (
          <NavDot
            key={card.id}
            $active={i === activeIndex}
            onClick={() => scrollToCard(i)}
            title={`Chapter ${card.chapter}: ${card.title}`}
          />
        ))}
      </NavDots>
    </>
  );
};
