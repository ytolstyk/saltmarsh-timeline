import { Authenticator } from "@aws-amplify/ui-react";
import { App } from "./App";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { CampaignProvider } from "./CampaignProvider";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

Amplify.configure(outputs);

const components = {
  Header() {
    return (
      <div className="saltmarsh-auth-header">
        <h1>Saltmarsh Timeline</h1>
        <p>Track your campaign events</p>
      </div>
    );
  },
};

export const AuthContextWrappers = () => {
  return (
    <Authenticator components={components}>
      <CampaignProvider>
        <MantineProvider>
          <ModalsProvider>
            <Notifications />
            <App />
          </ModalsProvider>
        </MantineProvider>
      </CampaignProvider>
    </Authenticator>
  );
};
