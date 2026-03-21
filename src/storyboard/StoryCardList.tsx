import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { storyCards } from "./storyboardData";
import { useStoryBookmarks } from "./useStoryBookmarks";
import { getFallbackGradient } from "./StoryCard.styles";
import {
  ListPage,
  ListHeader,
  ListTitle,
  ListSubtitle,
  SearchBar,
  CardGrid,
  CardThumbnail,
  ThumbnailOverlay,
  ThumbnailSession,
  ThumbnailTitle,
  ThumbnailBookmark,
  BackLink,
} from "./StoryCardList.styles";

export const StoryCardList = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { isBookmarked } = useStoryBookmarks("saltmarsh");

  const filtered = storyCards.filter((card) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      card.title.toLowerCase().includes(q) ||
      String(card.session).includes(q) ||
      String(card.chapter).includes(q)
    );
  });

  return (
    <ListPage>
      <BackLink as={Link} to="/">
        ← Back to Timeline
      </BackLink>
      <ListHeader>
        <ListTitle>The Saltmarsh Chronicles</ListTitle>
        <ListSubtitle>
          {storyCards.length} chapters across{" "}
          {new Set(storyCards.map((c) => c.session)).size} sessions
        </ListSubtitle>
      </ListHeader>

      <SearchBar>
        <input
          type="text"
          placeholder="Search by title or session number..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchBar>

      <CardGrid>
        {filtered.map((card) => {
          const bookmarked = isBookmarked(card.id);
          return (
            <CardThumbnail
              key={card.id}
              $gradient={getFallbackGradient(card.animation[0] ?? "none")}
              $bookmarked={bookmarked}
              onClick={() => navigate(`/story/${card.chapter}`)}
              style={{ animationDelay: `${(card.chapter - 1) * 30}ms` }}
            >
              <img
                src={`https://saltmarsh-files.s3.us-west-1.amazonaws.com/storybook/saltmarsh/jpeg/${card.backgroundImage}`}
                alt=""
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
                loading="lazy"
              />
              <ThumbnailOverlay>
                <ThumbnailSession>
                  Session {card.session} · Chapter {card.chapter}
                </ThumbnailSession>
                <ThumbnailTitle>{card.title}</ThumbnailTitle>
              </ThumbnailOverlay>
              {bookmarked && <ThumbnailBookmark>★</ThumbnailBookmark>}
            </CardThumbnail>
          );
        })}
      </CardGrid>
    </ListPage>
  );
};
