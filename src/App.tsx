import { useState } from "react";
import { AppHeader, Container } from "./App.styles.ts";
import { TimelineEvent, TimelineSettingsProps } from "./types.ts";
import { EventForm } from "./EventForm.tsx";
import { Timeline } from "./Timeline.tsx";
import { CurrentEventCard } from "./CurrentEventCard.tsx";
import { TimelineSettings } from "./TimelineSettings.tsx";

function App() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(
    null
  );
  const [timelineSettings, setTimelineSettings] =
    useState<TimelineSettingsProps>({
      startYear: null,
      endYear: null,
    });

  return (
    <Container>
      <AppHeader>
        <EventForm />
        <CurrentEventCard selectedEvent={selectedEvent} />
        <TimelineSettings
          timelineSettings={timelineSettings}
          onSettingsChange={setTimelineSettings}
        />
      </AppHeader>
      <Timeline
        onCardClick={setSelectedEvent}
        timelineSettings={timelineSettings}
      />
    </Container>
  );
}

export default App;
