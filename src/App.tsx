import { useState } from "react";
import { AppHeader, Container, Title } from "./App.styles.ts";
import { TimelineEvent, TimelineSettingsData } from "./types.ts";
import { EventForm } from "./EventForm.tsx";
import { Timeline } from "./Timeline.tsx";
import { CurrentEventCard } from "./CurrentEventCard.tsx";
import { TimelineSettings } from "./TimelineSettings.tsx";
import { Modal } from "./Modal.tsx";
import { useWidth } from "./useWidth.ts";
import { RenderIf } from "./RenderIf.tsx";

const MOBILE_WIDTH = 1000;

function App() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(
    null
  );
  const [timelineSettings, setTimelineSettings] =
    useState<TimelineSettingsData>({
      startYear: null,
      endYear: null,
      checkedTags: {},
      excludeDowntime: true,
    });
  const { elementRef, width } = useWidth();
  const isMobileWidth = width < MOBILE_WIDTH;

  return (
    <Container ref={elementRef}>
      <Title>Ghosts of Saltmarsh Timeline</Title>
      <RenderIf condition={!isMobileWidth}>
        <AppHeader>
          <EventForm />
          <CurrentEventCard
            selectedEvent={selectedEvent}
            clearEvent={() => setSelectedEvent(null)}
          />
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
      </RenderIf>
      <RenderIf condition={isMobileWidth}>
        <p>The website is currently optimized for wider displays</p>
      </RenderIf>
    </Container>
  );
}

export default App;
