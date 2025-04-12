import { useState } from "react";
import { AppHeader, Container, Title } from "./App.styles.ts";
import { TimelineEvent, TimelineSettingsProps } from "./types.ts";
import { EventForm } from "./EventForm.tsx";
import { Timeline } from "./Timeline.tsx";
import { CurrentEventCard } from "./CurrentEventCard.tsx";
import { TimelineSettings } from "./TimelineSettings.tsx";
import { Modal } from "./Modal.tsx";

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
      <Title>Ghosts of Saltmarsh Timeline</Title>
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
      <Modal />
    </Container>
  );
}

export default App;
