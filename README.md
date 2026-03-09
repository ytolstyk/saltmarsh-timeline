# Saltmarsh Timeline

[https://www.saltmarsh-timeline.com/](https://www.saltmarsh-timeline.com/)

A campaign event tracker for Dungeons & Dragons, built around the Greyhawk calendar. Log events by in-game date, visualize them on a vertical timeline, and filter by tags or date range.

## Features

- **Timeline view** — events are plotted on a vertical timeline; nearby events are automatically grouped into a single dot to avoid overlap
- **All-events list** — flat, scrollable list of every event in chronological order with inline editing
- **Pre-history events** — special sentinel dates for events before recorded time, shown in a banner above the timeline
- **Greyhawk calendar** — dates use the D&D calendar (364-day year: 12 months of 28 days + 4 festival weeks of 7 days)
- **Multiple campaigns** — create and switch between campaigns, each with its own events and settings
- **Tag filtering** — tag events and filter the timeline by one or more tags; optionally hide downtime events
- **Date range filter** — restrict the timeline to a specific year range
- **Reverse order** — display the timeline newest-first or oldest-first
- **Search** — filter events by keyword from a sticky search bar
- **Calendar view** — browse events in a monthly calendar layout
- **JSON import/export** — bulk-import events from a JSON file or download all events for backup
- **Guest mode** — view any campaign without an account; editing is restricted to admins

## Running Locally

The app requires an AWS Amplify sandbox for the backend.

1. Clone the repo
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start an Amplify sandbox (see [Amplify Gen 2 docs](https://docs.amplify.aws/react/start/)):
   ```bash
   npx ampx sandbox
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```

## JSON Import Format

Events can be bulk-imported via a JSON file. Each object must have:

| Field | Type | Description |
|-------|------|-------------|
| `date` | `"days,months,years"` | Comma-separated integers (e.g. `"5,3,591"`); use `"prehistory"` for pre-history events |
| `title` | string | Event title (required, non-empty) |
| `description` | string | Event description (required, non-empty) |
| `tags` | string | Comma-separated tags (optional, e.g. `"combat,downtime"`) |

Example:
```json
[
  {
    "date": "1,1,591",
    "title": "Campaign begins",
    "description": "The party meets at the Inn of the Welcome Wench.",
    "tags": "session-1"
  },
  {
    "date": "prehistory",
    "title": "The Age of Darkness",
    "description": "Events lost to time.",
    "tags": "lore"
  }
]
```

## Tech Stack

- React 19 + TypeScript + Vite
- [Mantine](https://mantine.dev/) v8 (UI components)
- AWS Amplify Gen 2 (AppSync GraphQL backend)
- AWS Cognito (authentication)
- SWR (data fetching)
