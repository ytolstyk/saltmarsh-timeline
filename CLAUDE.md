# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server (requires Amplify sandbox)
npm run build      # TypeScript check + Vite build
npm run lint       # ESLint
npm run type-check # TypeScript type check only
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

### Component Overview

- `App.tsx` — AppShell layout with sidebar (campaign selector, settings, actions) and main timeline area
- `Timeline.tsx` — vertical timeline: sticky search bar, pre-history banner, show-all-events flat list, grouped dot timeline
- `EventGroup.tsx` / `CurrentEventGroup.tsx` — positioned event card on timeline and expanded event detail/edit modal content
- `TimelineSettings.tsx` — year range slider, tag filter chips, and other filter controls in the sidebar
- `Calendar.tsx` / `CalendarMonth.tsx` / `Datepicker.tsx` — custom Greyhawk calendar UI
- `JSONModal.tsx` — bulk import events from JSON; `jsonHelper.ts` handles parse/download
- `EditEventForm.tsx` — inline edit form for a single event including date editing and pre-history toggle
