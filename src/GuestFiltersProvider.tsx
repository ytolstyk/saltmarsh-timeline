import { useState } from "react";
import { GuestFilters, GuestFiltersContext } from "./GuestFiltersContext";

export function GuestFiltersProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [guestFilters, setGuestFiltersState] = useState<GuestFilters>({
    startYear: null,
    endYear: null,
    checkedTags: null,
    showAllEvents: null,
    reverseOrder: null,
  });

  const setGuestFilters = (f: Partial<GuestFilters>) => {
    setGuestFiltersState((prev) => ({ ...prev, ...f }));
  };

  return (
    <GuestFiltersContext.Provider value={{ guestFilters, setGuestFilters }}>
      {children}
    </GuestFiltersContext.Provider>
  );
}
