import { useState } from "react";
import { CheckedTags, TimelineSettingsData } from "./types";
import { numValueOrZero } from "./dateHelper";
import {
  ButtonWrapper,
  FullWidthButton,
  NeedsAttention,
  TimelineSettingsContainer,
  TimelineSettingsFormRow,
} from "./TimelineSettings.styles";
import { openModal } from "./modalHelper";
import { JSONModal } from "./JSONModal";
import { TagsModal } from "./TagsModal";
import { RenderIf } from "./RenderIf";
import { DeleteAllModal } from "./DeleteAllModal";
import { downloadJSONEvents } from "./jsonHelper";
import { useEvents } from "./useEvents";

type Props = {
  onSettingsChange: (settings: TimelineSettingsData) => void;
  timelineSettings: TimelineSettingsData;
};

type TimelineSettingsForm = {
  startYear: number | string;
  endYear: number | string;
  checkedTags: CheckedTags;
  excludeDowntime: boolean;
};

const IT_TIMELINE = {
  startYear: 575,
  endYear: 600,
};

export function TimelineSettings({
  timelineSettings,
  onSettingsChange,
}: Props) {
  const [formData, setFormData] = useState<TimelineSettingsForm>({
    startYear: timelineSettings.startYear || "",
    endYear: timelineSettings.endYear || "",
    checkedTags: timelineSettings.checkedTags || {},
    excludeDowntime: timelineSettings.excludeDowntime,
  });
  const { events } = useEvents();

  const handleSettingsChange =
    (key: keyof Pick<TimelineSettingsData, "startYear" | "endYear">) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      const numberValue = value.replace(/[^0-9-]/g, "");
      const yearValue = numValueOrZero(numberValue);

      setFormData({
        ...formData,
        [key]: yearValue,
      });
    };

  const handleExcludeDowntimeClick = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { checked } = event.target;

    setFormData({
      ...formData,
      excludeDowntime: checked,
    });
    onSettingsChange({
      ...timelineSettings,
      excludeDowntime: checked,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { startYear, endYear, checkedTags, excludeDowntime } = formData;
    const newSettings: TimelineSettingsData = {
      startYear: startYear === "-" ? null : startYear,
      endYear: endYear === "-" ? null : endYear,
      checkedTags,
      excludeDowntime,
    };

    if (
      !Number.isInteger(newSettings.startYear) ||
      !Number.isInteger(newSettings.endYear)
    ) {
      return;
    }

    if (newSettings.startYear! > newSettings.endYear!) {
      return;
    }

    onSettingsChange(newSettings);
  };

  const handleDatesReset = () => {
    const { checkedTags, excludeDowntime } = timelineSettings;

    setFormData({
      startYear: "",
      endYear: "",
      checkedTags,
      excludeDowntime,
    });
    onSettingsChange({
      startYear: null,
      endYear: null,
      checkedTags,
      excludeDowntime,
    });
  };

  const handleRestrictClick = () => {
    const restrictedData = {
      ...timelineSettings,
      ...IT_TIMELINE,
    };

    setFormData(restrictedData);
    onSettingsChange(restrictedData);
  };

  const handleUploadClick = () => {
    openModal({
      contentComponent: <JSONModal />,
    });
  };

  const handleDownloadClick = () => {
    downloadJSONEvents(events);
  };

  const handleCheckedTagsSubmit = (tagChanges: CheckedTags) => {
    onSettingsChange({
      ...timelineSettings,
      checkedTags: tagChanges,
    });
  };

  const handleTagsClick = () => {
    openModal({
      contentComponent: (
        <TagsModal
          checkedTags={timelineSettings.checkedTags}
          setCheckedTags={handleCheckedTagsSubmit}
        />
      ),
    });
  };

  const handleDeleteEverythingClick = () => {
    openModal({
      contentComponent: <DeleteAllModal />,
    });
  };

  return (
    <TimelineSettingsContainer>
      <form>
        <TimelineSettingsFormRow>
          <input
            type="text"
            placeholder="Start year"
            value={formData.startYear}
            onChange={handleSettingsChange("startYear")}
          />
          to
          <input
            type="text"
            placeholder="End year"
            value={formData.endYear}
            onChange={handleSettingsChange("endYear")}
          />
        </TimelineSettingsFormRow>
        <TimelineSettingsFormRow>
          <button type="button" onClick={handleDatesReset}>
            Reset
          </button>
          <button type="button" onClick={handleRestrictClick}>
            IT Timeline
          </button>
          <button type="submit" onClick={handleSubmit}>
            Apply
          </button>
        </TimelineSettingsFormRow>
        <TimelineSettingsFormRow>
          <label>
            <input
              type="checkbox"
              onChange={handleExcludeDowntimeClick}
              checked={formData.excludeDowntime}
            />
            Exclude downtime
          </label>
        </TimelineSettingsFormRow>
        <TimelineSettingsFormRow>
          <ButtonWrapper>
            <FullWidthButton type="button" onClick={handleTagsClick}>
              Filter by tags
            </FullWidthButton>
            <RenderIf
              condition={Object.values(timelineSettings.checkedTags).some(
                (val) => val
              )}
            >
              <NeedsAttention />
            </RenderIf>
          </ButtonWrapper>
        </TimelineSettingsFormRow>
        <TimelineSettingsFormRow>
          <FullWidthButton type="button" onClick={handleUploadClick}>
            Upload JSON
          </FullWidthButton>
          <FullWidthButton type="button" onClick={handleDownloadClick}>
            Download JSON
          </FullWidthButton>
        </TimelineSettingsFormRow>
        <TimelineSettingsFormRow>
          <FullWidthButton type="button" onClick={handleDeleteEverythingClick}>
            Delete everything
          </FullWidthButton>
        </TimelineSettingsFormRow>
      </form>
    </TimelineSettingsContainer>
  );
}
