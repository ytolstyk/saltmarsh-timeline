import { useState } from "react";
import { AppFooter, Container, Title } from "./App.styles.ts";
import { TimelineSettingsData } from "./types.ts";
import { EventForm } from "./EventForm.tsx";
import { Timeline } from "./Timeline.tsx";
import { TimelineSettings } from "./TimelineSettings.tsx";
import { Modal } from "./Modal.tsx";
import { useWidth } from "./useWidth.ts";
import { RenderIf } from "./RenderIf.tsx";

const MOBILE_WIDTH = 1000;

function App() {
  const [timelineSettings, setTimelineSettings] =
    useState<TimelineSettingsData>({
      startYear: 575,
      endYear: 600,
      checkedTags: {},
      excludeDowntime: true,
    });
  const { elementRef, width } = useWidth();
  const isMobileWidth = width < MOBILE_WIDTH;

  return (
    <Container ref={elementRef}>
      <Title>Ghosts of Saltmarsh Timeline</Title>
      <RenderIf condition={!isMobileWidth}>
        <Timeline timelineSettings={timelineSettings} />
        <AppFooter>
          <EventForm />
          <TimelineSettings
            timelineSettings={timelineSettings}
            onSettingsChange={setTimelineSettings}
          />
        </AppFooter>
        <Modal />
      </RenderIf>
      <RenderIf condition={isMobileWidth}>
        <p>The website is currently optimized for wider displays</p>
      </RenderIf>
    </Container>
  );
}

export default App;
