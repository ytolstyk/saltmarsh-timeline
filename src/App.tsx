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
        <Divider my="md" label="Actions" labelPosition="center" />
        <Stack gap="xs">
          <Button variant="filled" onClick={handleAddEventClick}>
            Add Event
          </Button>
          <Button variant="light" onClick={handleAddCampaignClick}>
            Add Campaign
          </Button>
          <Button variant="light" onClick={handleEditCampaignClick}>
            Edit Campaign
          </Button>
          <Button variant="subtle" color="gray" onClick={handleUploadClick}>
            Upload Events JSON
          </Button>
          <Button variant="subtle" color="gray" onClick={handleDownloadClick}>
            Download Events JSON
          </Button>
          <Button variant="subtle" color="gray" onClick={handleViewCalendarClick}>
            View calendar
          </Button>
          <Button
            color="red"
            variant="subtle"
            onClick={handleDeleteEverythingClick}
            mt="sm"
          >
            Delete Campaign Events
          </Button>
          <Button color="red" variant="light" onClick={handleDeleteCampaign}>
            Delete Campaign
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
      header={{ height: { base: 56, md: 60 } }}
      navbar={{
        width: { base: 380 },
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e8eaf0",
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        }}
      >
        <Group h="100%" px="lg">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Header>
            <Title>{campaign.name} Timeline</Title>
            <Button variant="subtle" color="gray" size="sm" onClick={signOut}>
              Sign out
            </Button>
          </Header>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar
        p="md"
        style={{
          background: "#ffffff",
          borderRight: "1px solid #e8eaf0",
        }}
      >
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
      <AppShell.Main style={{ background: "#f0f2f7" }}>
        <Timeline />
      </AppShell.Main>
    </AppShell>
  );
}
