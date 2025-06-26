import { useState } from "react";
import { AppFooter, Container, Header, Title } from "./App.styles.ts";
import { TimelineSettingsData } from "./types.ts";
import { EventForm } from "./EventForm.tsx";
import { Timeline } from "./Timeline.tsx";
import { TimelineSettings } from "./TimelineSettings.tsx";
import { Modal } from "./Modal.tsx";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);

function App() {
  const [timelineSettings, setTimelineSettings] =
    useState<TimelineSettingsData>({
      startYear: 575,
      endYear: 600,
      checkedTags: {},
      excludeDowntime: true,
    });

  return (
    <>
      <Authenticator>
        {({ signOut, user }) => {
          return (
            <Container>
              <Header>
                <div>{user?.signInDetails?.loginId}</div>
                <Title>Ghosts of Saltmarsh Timeline</Title>
                <button onClick={signOut}>Sign out</button>
              </Header>
              <Timeline timelineSettings={timelineSettings} />
              <AppFooter>
                <EventForm />
                <TimelineSettings
                  timelineSettings={timelineSettings}
                  onSettingsChange={setTimelineSettings}
                />
              </AppFooter>
              <Modal />
            </Container>
          );
        }}
      </Authenticator>
    </>
  );
}

export default App;
