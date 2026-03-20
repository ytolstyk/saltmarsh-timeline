import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY_PREFIX = "storyBookmarks_";

export function useStoryBookmarks(campaignName: string) {
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  useEffect(() => {
    const key = STORAGE_KEY_PREFIX + campaignName;
    try {
      const stored = localStorage.getItem(key);
      if (stored) setBookmarks(JSON.parse(stored));
    } catch {
      // ignore parse errors
    }
  }, [campaignName]);

  const persist = useCallback(
    (next: string[]) => {
      setBookmarks(next);
      const key = STORAGE_KEY_PREFIX + campaignName;
      localStorage.setItem(key, JSON.stringify(next));
    },
    [campaignName]
  );

  const toggleBookmark = useCallback(
    (cardId: string) => {
      const next = bookmarks.includes(cardId)
        ? bookmarks.filter((id) => id !== cardId)
        : [...bookmarks, cardId];
      persist(next);
    },
    [bookmarks, persist]
  );

  const isBookmarked = useCallback(
    (cardId: string) => bookmarks.includes(cardId),
    [bookmarks]
  );

  return { bookmarks, toggleBookmark, isBookmarked };
}
