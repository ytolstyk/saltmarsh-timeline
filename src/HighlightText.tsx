import { getFuzzyMatchRanges } from "./dateHelper";

type Props = {
  text: string;
  query: string;
};

export function HighlightText({ text, query }: Props) {
  if (!query.trim()) return <>{text}</>;

  const ranges = getFuzzyMatchRanges(query, text);
  if (ranges.length === 0) return <>{text}</>;

  const parts: React.ReactNode[] = [];
  let cursor = 0;

  for (const [start, end] of ranges) {
    if (cursor < start) {
      parts.push(text.slice(cursor, start));
    }
    parts.push(
      <mark
        key={start}
        style={{
          background: "rgba(0, 99, 255, 0.15)",
          color: "inherit",
          borderRadius: "2px",
          padding: "0 1px",
        }}
      >
        {text.slice(start, end + 1)}
      </mark>
    );
    cursor = end + 1;
  }

  if (cursor < text.length) {
    parts.push(text.slice(cursor));
  }

  return <>{parts}</>;
}
