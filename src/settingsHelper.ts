import { CheckedTags } from "./types";

export function checkedTagsToPayload(checkedTags?: CheckedTags | null) {
  if (!checkedTags) {
    return [];
  }

  return Object.keys(checkedTags).filter((key) => checkedTags[key]);
}
