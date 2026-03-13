import { useState, useEffect } from "react";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { App } from "./App";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { CampaignProvider } from "./CampaignProvider";
import { MantineProvider, Modal } from "@mantine/core";
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

function AuthStatusWatcher({
  onAuthenticated,
  onUnauthenticated,
}: {
  onAuthenticated: () => void;
  onUnauthenticated: () => void;
}) {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  useEffect(() => {
    if (authStatus === "authenticated") {
      onAuthenticated();
    } else if (authStatus === "unauthenticated") {
      onUnauthenticated();
    }
  }, [authStatus]);
  return null;
}

export const AuthContextWrappers = () => {
  const [isGuest, setIsGuest] = useState(true);
  const [signInModalOpen, setSignInModalOpen] = useState(false);

  const components = {
    Header: AuthHeader,
    Footer() {
      return (
        <div style={{ textAlign: "center", paddingBottom: "1rem" }}>
          <button
            onClick={() => setSignInModalOpen(false)}
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

  return (
    <Authenticator.Provider>
      <AuthStatusWatcher
        onAuthenticated={() => {
          setIsGuest(false);
          setSignInModalOpen(false);
        }}
        onUnauthenticated={() => setIsGuest(true)}
      />
      <UserRoleProvider isGuest={isGuest}>
        <CampaignProvider>
          <MantineProvider>
            <ModalsProvider>
              <Notifications />
              <App
                isGuest={isGuest}
                onSignInClick={() => setSignInModalOpen(true)}
              />
              <Modal
                opened={signInModalOpen}
                onClose={() => setSignInModalOpen(false)}
                padding={0}
                withCloseButton={false}
                size="md"
                centered
              >
                <div className="auth-modal-wrapper">
                  <Authenticator components={components} />
                </div>
              </Modal>
            </ModalsProvider>
          </MantineProvider>
        </CampaignProvider>
      </UserRoleProvider>
    </Authenticator.Provider>
  );
};
