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

## Architecture

**Saltmarsh Timeline** is a D&D campaign event tracker using a custom Greyhawk calendar (364 days/year: 12 months of 28 days + 4 festival weeks of 7 days).

### Stack

- React 19 + TypeScript + Vite
- Mantine v8 UI (AppShell, modals, notifications)
- AWS Amplify Gen 2 (AppSync GraphQL backend)
- AWS Cognito (authentication via `@aws-amplify/ui-react`)
- SWR for data fetching

### Data Models (amplify/data/resource.ts)

- **Campaign** — top-level container with date range and year bounds
- **Event** — belongs to a Campaign; stored as `daysSinceOrigin` (integer days from year 0)
- **TimelineSettings** — per-campaign settings (year filter range, tag filters, excludeDowntime); owner-authorized

### Key Patterns

**Date system** (`src/dateHelper.ts`): All dates stored as `daysSinceOrigin` (integer). Conversion between FormDate `{years, months, days}` and days uses `convertInputToDays`/`convertDaysToDateObject`. The CALENDAR constant maps day offsets to month/day info. `DAYS_IN_YEAR = 364`.

**Event grouping** (`src/eventsHelper.ts`, `src/useFilteredEventGroups.ts`): Events close together on the timeline are grouped by a `daysRadius` computed from pixel dot size vs timeline height. `groupEvents()` buckets events by floor-dividing `daysSinceOrigin` by `daysRadius`.

**Campaign context** (`src/CampaignContext.ts`, `src/CampaignProvider.tsx`, `src/useCampaigns.ts`): Selected campaign is managed via React context. `useCampaigns` hook handles fetching, selection, and deletion.

**Amplify API layer** (`src/amplifyApi.ts`): All backend calls go through this file. Batch operations use chunks of 50.

**Styles**: Components use either Mantine's `createStyles`/`sx` or `styled-components`. Style files are co-located as `ComponentName.styles.ts`.

### Component Overview

- `App.tsx` — AppShell layout with navbar (campaign selector, settings, actions) and main timeline
- `Timeline.tsx` — renders the vertical timeline line with positioned event group dots
- `EventGroup.tsx` / `CurrentEventGroup.tsx` — event dot and expanded event list
- `TimelineSettings.tsx` — year range and tag filter controls in the sidebar
- `Calendar.tsx` / `CalendarMonth.tsx` / `Datepicker.tsx` — custom DnD calendar UI
- `JSONModal.tsx` — bulk import events from JSON; `jsonHelper.ts` handles parse/download logic

## Validations

Make sure all validations pass before submitting

1. **Lint** `npm run lint`
2. **Types** `npm run type-check`
3. **Build** `npm run build`
