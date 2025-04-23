import { useState } from "react";
import { CheckedTags, TimelineSettingsData } from "./types";
import { numValueOrZero } from "./dateHelper";
import {
  ButtonWrapper,
  NeedsAttention,
  TimelineSettingsContainer,
  TimelineSettingsFormRow,
} from "./TimelineSettings.styles";
import { openModal } from "./modalHelper";
import { CSVModal } from "./CSVModal";
import { TagsModal } from "./TagsModal";
import { RenderIf } from "./RenderIf";

type Props = {
  onSettingsChange: (settings: TimelineSettingsData) => void;
  timelineSettings: TimelineSettingsData;
};

type TimelineSettingsForm = {
  startYear: number | string;
  endYear: number | string;
  checkedTags: CheckedTags;
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
  });

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

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { startYear, endYear, checkedTags } = formData;
    const newSettings: TimelineSettingsData = {
      startYear: startYear === "-" ? null : startYear,
      endYear: endYear === "-" ? null : endYear,
      checkedTags,
    };

    onSettingsChange(newSettings);
  };

  const handleReset = () => {
    setFormData({
      startYear: "",
      endYear: "",
      checkedTags: {},
    });
    onSettingsChange({
      startYear: null,
      endYear: null,
      checkedTags: {},
    });
  };

  const handleRestrictClick = () => {
    const restrictedData = {
      ...formData,
      ...IT_TIMELINE,
    };

    setFormData(restrictedData);
    onSettingsChange(restrictedData);
  };

  const handleUploadClick = () => {
    openModal({
      contentComponent: <CSVModal />,
    });
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

  return (
    <TimelineSettingsContainer>
      <form>
        <TimelineSettingsFormRow>
          <label>Start year</label>
          <input
            type="text"
            value={formData.startYear}
            onChange={handleSettingsChange("startYear")}
          />
        </TimelineSettingsFormRow>
        <TimelineSettingsFormRow>
          <label>End year</label>
          <input
            type="text"
            value={formData.endYear}
            onChange={handleSettingsChange("endYear")}
          />
        </TimelineSettingsFormRow>
        <TimelineSettingsFormRow>
          <button type="button" onClick={handleReset}>
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
          <ButtonWrapper>
            <button type="button" onClick={handleTagsClick}>
              Filter by tags
            </button>
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
          <button type="button" onClick={handleUploadClick}>
            Upload CSV
          </button>
        </TimelineSettingsFormRow>
      </form>
    </TimelineSettingsContainer>
  );
}
