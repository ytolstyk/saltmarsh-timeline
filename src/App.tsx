import { useContext } from "react";
import { ActionButtonContainer, Header, Title } from "./App.styles.ts";
import { useDisclosure } from "@mantine/hooks";
import { EventForm } from "./EventForm.tsx";
import { Timeline } from "./Timeline.tsx";
import { TimelineSettings } from "./TimelineSettings.tsx";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { CampaignForm } from "./CampaignForm.tsx";
import { JSONModal } from "./JSONModal.tsx";
import { downloadJSONEvents } from "./jsonHelper.ts";
import { useEvents } from "./useEvents.ts";
import { CampaignContext } from "./CampaignContext.ts";
import {
  AppShell,
  Burger,
  Group,
  Button,
  Select,
  Stack,
  Divider,
  Text,
  ScrollArea,
} from "@mantine/core";
import { modals } from "@mantine/modals";
import { Calendar } from "./Calendar.tsx";

export function App() {
  const [opened, { toggle }] = useDisclosure();

  const { events, deleteAllCampaignEvents } = useEvents();

  const { campaign, campaigns, rawCampaign, setCampaignId, erase } =
    useContext(CampaignContext);

  const { signOut } = useAuthenticator();

  const handleAddEventClick = () => {
    modals.open({
      title: "Add Event",
      size: "lg",
      children: <EventForm />,
    });
  };

  const handleAddCampaignClick = () => {
    modals.open({
      title: "Add Campaign",
      size: "lg",
      children: <CampaignForm />,
    });
  };

  const handleEditCampaignClick = () => {
    modals.open({
      title: "Edit Campaign",
      size: "lg",
      children: <CampaignForm campaign={rawCampaign} />,
    });
  };

  const handleDeleteEverythingClick = () => {
    modals.openConfirmModal({
      title: "Delete All Events",
      children: (
        <Text size="sm">
          This will delete all events for the current campaign. Are you sure you
          want to proceed?
        </Text>
      ),
      labels: { confirm: "F**k it!", cancel: "I changed my mind" },
      onCancel: () => modals.closeAll(),
      onConfirm: () => deleteAllCampaignEvents(),
    });
  };

  const handleDeleteCampaign = () => {
    modals.openConfirmModal({
      title: "Delete Current Campaign",
      children: (
        <Text size="sm">
          This will delete the current campaign and all its events. Are you sure
          about this?
        </Text>
      ),
      labels: { confirm: "It's gone", cancel: "No, wait!" },
      onCancel: () => modals.closeAll(),
      onConfirm: () => erase(campaign.id),
    });
  };

  const handleUploadClick = () => {
    modals.open({
      title: "Upload Events JSON",
      size: "100%",
      children: <JSONModal />,
    });
  };

  const handleViewCalendarClick = () => {
    modals.open({
      title: "Calendar",
      size: "100%",
      children: <Calendar />,
    });
  };

  const handleDownloadClick = () => {
    downloadJSONEvents(events);
  };

  const renderMenu = () => {
    return (
      <ActionButtonContainer>
        <Divider mt="xl" my="xl" label="Actions" labelPosition="center" />
        <Stack>
          <Button variant="default" onClick={handleAddEventClick}>
            Add Event
          </Button>
          <Button variant="default" onClick={handleAddCampaignClick}>
            Add Campaign
          </Button>
          <Button variant="default" onClick={handleEditCampaignClick}>
            Edit Campaign
          </Button>
          <Button variant="default" onClick={handleUploadClick}>
            Upload Events JSON
          </Button>
          <Button variant="default" onClick={handleDownloadClick}>
            Download Events JSON
          </Button>
          <Button variant="default" onClick={handleViewCalendarClick}>
            View calendar
          </Button>
          <Button
            color="red"
            variant="outline"
            onClick={handleDeleteEverythingClick}
          >
            Delete Current Campaign Events
          </Button>
          <Button color="red" variant="filled" onClick={handleDeleteCampaign}>
            Delete Current Campaign
          </Button>
        </Stack>
      </ActionButtonContainer>
    );
  };

  const renderTimelineSettings = () => {
    if (!campaign) {
      return null;
    }

    return <TimelineSettings />;
  };

  return (
    <AppShell
      padding="md"
      header={{ height: { base: 60, md: 70, lg: 80 } }}
      navbar={{
        width: { base: 400 },
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Header>
            <Title>Ghosts of Saltmarsh Timeline</Title>
            <Button variant="outline" onClick={signOut}>
              Sign out
            </Button>
          </Header>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <ScrollArea style={{ height: "100%" }} type="hover" offsetScrollbars>
          <Select
            label="Current Campaign"
            value={campaign?.id || ""}
            data={campaigns.map((c) => ({ value: c.id, label: c.name }))}
            onChange={(value) => setCampaignId(value || "")}
          />
          {renderTimelineSettings()}
          {renderMenu()}
        </ScrollArea>
      </AppShell.Navbar>
      <AppShell.Main>
        <Timeline />
      </AppShell.Main>
    </AppShell>
  );
}
