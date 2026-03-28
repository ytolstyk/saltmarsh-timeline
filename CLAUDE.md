# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server (requires Amplify sandbox)
rtk err npm run build       # Production build (vite build)
rtk lint           # ESLint
rtk type           # TypeScript type check only
npm run preview    # Preview production build
```

For local development, an AWS Amplify sandbox must be running to provide the backend. The app expects Amplify-generated config files to be present.

## Validations

Run before committing:

1. **Lint** `npm run lint`
2. **Types** `npm run type-check`
3. **Build** `npm run build`

## Architecture

**Saltmarsh Timeline** is a D&D campaign event tracker using a custom Greyhawk calendar (364 days/year: 12 months of 28 days + 4 festival weeks of 7 days).

### Stack

- React 19 + TypeScript + Vite
- React Router v6 (client-side routing)
- Mantine v8 UI (AppShell, modals, notifications)
- AWS Amplify Gen 2 (AppSync GraphQL backend, `amplify/data/resource.ts`)
- AWS Cognito (authentication via `@aws-amplify/ui-react`)
- SWR for data fetching with key-based cache invalidation
- styled-components for co-located component styles (`ComponentName.styles.ts`)

### Data Models (`amplify/data/resource.ts`)

- **Campaign** — top-level container; has many Events and one TimelineSettings
- **Event** — belongs to Campaign; date stored as `daysSinceOrigin` (integer days from year 0)
- **TimelineSettings** — per-campaign settings: `startYear`, `endYear`, `checkedTags`, `excludeDowntime`, `showAllEvents`, `reverseOrder`; owner-authorized

### Key Patterns

**Date system** (`src/dateHelper.ts`): All dates stored as `daysSinceOrigin` integer. `DAYS_IN_YEAR = 364`. Conversion via `convertInputToDays` / `convertDaysToDateObject`. The `CALENDAR` constant maps day offsets (0–363) to `{monthName, monthIndex, day}`. `PREHISTORY_DAYS = -999999999` is a sentinel for pre-history events (before all recorded time); use `isPrehistory()` to check. Pre-history events bypass all date filters and are excluded from timeline line/range calculations.

**Event grouping** (`src/eventsHelper.ts`, `src/useFilteredEventGroups.ts`): Events close together are grouped by bucketing `daysSinceOrigin` with `Math.floor(days / daysRadius) * daysRadius`. `daysRadius` is computed from pixel dot size vs timeline height via `radiusInDays()`. `useFilteredEventGroups` applies date range → tag → search filters in sequence, then separates pre-history events into a `prehistoryGroup`. The `offset` and `lineLength` returned are derived from actual event group positions (not raw event dates) so the first and last dots land exactly at 0% and 100% of the line.

**Timeline positioning** (`src/timelineHelper.ts`, `src/Timeline.tsx`): `percentFromTop(daysSinceOrigin, offset, lineLength)` gives a 0–100 percentage. When `reverseOrder` is on, `calcPercentTop = 100 - pct`. Z-index for event cards uses `eventGroups.length - index` so cards higher on screen (lower index in normal mode) appear above those below them.

**Campaign context** (`src/CampaignContext.ts`, `src/CampaignProvider.tsx`, `src/useCampaigns.ts`): Selected campaign is managed via React context. `useCampaigns` handles fetching, selection, and deletion (including cascade delete of Events and TimelineSettings before deleting the Campaign).

**Amplify API layer** (`src/amplifyApi.ts`): All backend calls go through this file. Uses `requireId`/`requireString` validation helpers. Batch operations use chunks of 50. Cascade delete order: events → TimelineSettings → Campaign.

**Timeline settings** (`src/useTimelineSettings.ts`): `timelineSettingsData` is the normalized settings object used throughout the app. `checkedTags` is converted from `string[]` (DB) to `Record<string, boolean>` (UI). `showAllEvents` and `reverseOrder` are booleans with `Boolean()` coercion.

**User roles** (`src/UserRoleContext.ts`, `src/UserRoleProvider.tsx`): Three roles — `"guest"`, `"user"`, `"admin"`. `useUserRole()` exposes `role`, `isGuest`, `isAdmin`, `isAuthenticated`. Editing actions are gated on `isAdmin`. `LockedButton.tsx` renders a disabled button with a tooltip when `locked={true}`.

**Guest mode** (`src/GuestFiltersContext.ts`, `src/GuestFiltersProvider.tsx`): Unauthenticated visitors can view campaigns. Their filter state (`startYear`, `endYear`, `checkedTags`, `showAllEvents`, `reverseOrder`) is stored in `GuestFiltersContext` instead of persisted TimelineSettings.

**Auth wrappers** (`src/AuthContextWrappers.tsx`): Wraps the main `App` with Amplify auth, campaign context, user-role context, and guest-filters context. Handles the sign-in screen with background image and the guest-mode entry path.

**Routing** (`src/main.tsx`): React Router with three routes — `/story/:cardNumber` → `Storyboard`, `/story` → `StoryCardList`, `/*` → `AuthContextWrappers` (main app).

### Storyboard (`src/storyboard/`)

A separate illustrated story reader at `/story`. Cards are sourced from `storyboardData.ts` (static data). `StoryCardList` shows chapter thumbnails; `Storyboard` is the full-screen reader with snap-scroll, keyboard navigation (arrow keys), IntersectionObserver-based active tracking, nav dots, image preloading, and bookmark persistence via `useStoryBookmarks`. Deep links: `/story/:cardNumber`.

### Component Overview

- `App.tsx` — AppShell layout with sidebar (campaign selector, settings, actions) and main timeline area; nav links to `/story`
- `AuthContextWrappers.tsx` — auth + context providers; routes between sign-in screen, guest view, and authenticated app
- `Timeline.tsx` — vertical timeline: sticky search bar, pre-history banner, show-all-events flat list, grouped dot timeline
- `EventGroup.tsx` / `CurrentEventGroup.tsx` — positioned event card on timeline and expanded event detail/edit modal content
- `EventForm.tsx` — modal form for adding a new event
- `EditEventForm.tsx` — inline edit form for a single event including date editing and pre-history toggle
- `CampaignForm.tsx` — modal form for adding/editing a campaign
- `TimelineSettings.tsx` — year range slider, tag filter chips, and other filter controls in the sidebar
- `TagsModal.tsx` — manage available tags for a campaign
- `LockedButton.tsx` — button that shows a tooltip and is disabled when `locked={true}`
- `Calendar.tsx` / `CalendarMonth.tsx` / `Datepicker.tsx` — custom Greyhawk calendar UI
- `JSONModal.tsx` — bulk import events from JSON; `jsonHelper.ts` handles parse/download
- `HighlightText.tsx` — highlights search query matches within text
- `RenderIf.tsx` — simple conditional render wrapper
- `storyboard/Storyboard.tsx` — full-screen story card reader with scroll snap and nav dots
- `storyboard/StoryCardList.tsx` — chapter grid/list for the storyboard landing page
- `storyboard/StoryCard.tsx` — individual illustrated story card with bookmark support
