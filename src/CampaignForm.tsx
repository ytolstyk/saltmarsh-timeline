import { useState } from "react";
import { Form } from "./EventForm.styles";
import { useCampaigns } from "./useCampaigns";
import { Campaign, CampaignFormData } from "./types";
import {
  Button,
  Fieldset,
  Grid,
  NumberInput,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { modals } from "@mantine/modals";

type Props = {
  campaign?: Campaign | null;
};

export function CampaignForm({ campaign }: Props) {
  const { addCampaign, editCampaign } = useCampaigns();
  const isEditing = Boolean(campaign);

  const [formData, setFormData] = useState<CampaignFormData>({
    name: campaign?.name || "",
    description: campaign?.description || "",
    startDate: campaign?.startDate || "",
    endDate: campaign?.endDate || "",
    campaignStartYear: campaign?.campaignStartYear || 0,
    campaignEndYear: campaign?.campaignEndYear || 0,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const isValidInput = () => {
    setErrors({});
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.startDate) {
      newErrors.startDate = "Start date is required";
    }

    if (
      formData.endDate &&
      formData.startDate &&
      formData.endDate < formData.startDate
    ) {
      newErrors.endDate = "End date cannot be before start date";
    }

    if (
      (formData.campaignStartYear === 0 || formData.campaignStartYear) &&
      (formData.campaignEndYear === 0 || formData.campaignEndYear) &&
      formData.campaignEndYear < formData.campaignStartYear
    ) {
      newErrors.campaignEndYear =
        "Campaign end year cannot be before start year";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange =
    (key: keyof CampaignFormData) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [key]: event.currentTarget.value });
    };

  const handleNumberInputChange =
    (key: keyof CampaignFormData) => (value: number | string) => {
      setFormData({ ...formData, [key]: value });
    };

  const handleDateChange =
    (key: keyof CampaignFormData) => (value: string | null) => {
      setFormData({ ...formData, [key]: value });
    };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    event.preventDefault();

    if (!isValidInput()) {
      return;
    }

    if (isEditing && campaign) {
      editCampaign({ ...formData, id: campaign.id });
    } else {
      addCampaign(formData);
    }

    setFormData({
      name: "",
      description: "",
      startDate: "",
      endDate: null,
      campaignStartYear: null,
      campaignEndYear: null,
    });
    modals.closeAll();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Fieldset legend="Campaign Details">
        <TextInput
          label="Title"
          error={errors.name}
          onChange={handleInputChange("name")}
          placeholder="Campaign Name"
          value={formData.name}
        />
        <Textarea
          label="Description"
          error={errors.description}
          onChange={handleInputChange("description")}
          placeholder="Description"
          value={formData.description}
          mt="md"
        />
        <Grid mt="md">
          <Grid.Col span={6}>
            <DateInput
              onChange={handleDateChange("startDate")}
              label="Start Date"
              placeholder="Start of the campaign"
              value={formData.startDate}
              error={errors.startDate}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <DateInput
              onChange={handleDateChange("endDate")}
              label="End Date"
              placeholder="Campaign end date (optional)"
              value={formData.endDate}
              error={errors.endDate}
            />
          </Grid.Col>
        </Grid>
      </Fieldset>
      <Fieldset legend="Campaign Timeline">
        <Grid>
          <Grid.Col span={6}>
            <NumberInput
              label="Campaign Start Year"
              placeholder="Campaign Start Year"
              value={formData.campaignStartYear || 0}
              onChange={handleNumberInputChange("campaignStartYear")}
              error={errors.campaignStartYear}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <NumberInput
              label="Campaign End Year (optional)"
              placeholder="Campaign End Year"
              value={formData.campaignEndYear || 0}
              onChange={handleNumberInputChange("campaignEndYear")}
              error={errors.campaignEndYear}
            />
          </Grid.Col>
        </Grid>
      </Fieldset>
      <Button variant="primary" onClick={handleSubmit}>
        {isEditing ? "Save Changes" : "Add Campaign"}
      </Button>
    </Form>
  );
}
