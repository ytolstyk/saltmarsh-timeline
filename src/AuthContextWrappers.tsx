import { useState } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import { App } from "./App";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { CampaignProvider } from "./CampaignProvider";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import { UserRoleProvider } from "./UserRoleProvider";

Amplify.configure(outputs);

const AuthHeader = () => (
  <div className="saltmarsh-auth-header">
    <h1>Saltmarsh Timeline</h1>
    <p>Track your campaign events</p>
  </div>
);

export const AuthContextWrappers = () => {
  const [isGuest, setIsGuest] = useState(false);

  const components = {
    Header: AuthHeader,
    Footer() {
      return (
        <div style={{ textAlign: "center", paddingBottom: "1rem" }}>
          <button
            onClick={() => setIsGuest(true)}
            style={{
              background: "none",
              border: "none",
              color: "#868e96",
              cursor: "pointer",
              fontSize: "0.875rem",
              textDecoration: "underline",
            }}
          >
            Continue as guest
          </button>
        </div>
      );
    },
  };

  const appContent = (
    <UserRoleProvider isGuest={isGuest}>
      <CampaignProvider>
        <MantineProvider>
          <ModalsProvider>
            <Notifications />
            <App isGuest={isGuest} onSignInClick={() => setIsGuest(false)} />
          </ModalsProvider>
        </MantineProvider>
      </CampaignProvider>
    </UserRoleProvider>
  );

  if (isGuest) {
    return appContent;
  }

  return (
    <Authenticator components={components}>
      {appContent}
    </Authenticator>
  );
};
