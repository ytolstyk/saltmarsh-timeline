import { createContext, useContext } from "react";
import { CheckedTags } from "./types";

export type GuestFilters = {
  startYear: number | null;
  endYear: number | null;
  checkedTags: CheckedTags | null;
};

type GuestFiltersContextValue = {
  guestFilters: GuestFilters;
  setGuestFilters: (f: Partial<GuestFilters>) => void;
};

export const GuestFiltersContext = createContext<GuestFiltersContextValue>({
  guestFilters: { startYear: null, endYear: null, checkedTags: null },
  setGuestFilters: () => {},
});

export const useGuestFilters = () => useContext(GuestFiltersContext);
