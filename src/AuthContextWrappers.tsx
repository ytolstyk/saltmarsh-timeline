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
import { GuestFiltersProvider } from "./GuestFiltersProvider";
import fallingStarShip from "./assets/images/falling_star_ship4.jpg";

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
      return <div style={{ height: "6rem" }} />;
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
        <GuestFiltersProvider>
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
                  size="xl"
                  centered
                  styles={{
                    body: {
                      backgroundImage: `url(${fallingStarShip})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    },
                  }}
                >
                  <div className="auth-modal-wrapper">
                    <Authenticator components={components} />
                  </div>
                </Modal>
              </ModalsProvider>
            </MantineProvider>
          </CampaignProvider>
        </GuestFiltersProvider>
      </UserRoleProvider>
    </Authenticator.Provider>
  );
};
