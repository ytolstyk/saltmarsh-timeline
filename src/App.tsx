import { useState } from "react";
import { AppHeader, Container } from "./App.styles.ts";
import { TimelineEvent } from "./types.ts";
import { EventForm } from "./EventForm.tsx";
import { Timeline } from "./Timeline.tsx";
import { CurrentEventCard } from "./CurrentEventCard.tsx";

function App() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(
    null
  );

  return (
    <Container>
      <AppHeader>
        <EventForm />
        <CurrentEventCard selectedEvent={selectedEvent} />
      </AppHeader>
      <Timeline onCardClick={setSelectedEvent} />
    </Container>
  );
}

export default App;
