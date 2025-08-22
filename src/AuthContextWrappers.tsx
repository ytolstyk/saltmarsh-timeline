import { Authenticator } from "@aws-amplify/ui-react";
import { App } from "./App";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { CampaignProvider } from "./CampaignProvider";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

Amplify.configure(outputs);

export const AuthContextWrappers = () => {
  return (
    <Authenticator>
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
