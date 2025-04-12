import { useState } from "react";
import { TimelineSettingsProps } from "./types";
import { numValueOrZero } from "./dateHelper";
import {
  TimelineSettingsContainer,
  TimelineSettingsFormRow,
  TimelineSettingsTitle,
} from "./TimelineSettings.styles";
import { openModal } from "./modalHelper";
import { CSVModal } from "./CSVModal";

type Props = {
  onSettingsChange: (settings: TimelineSettingsProps) => void;
  timelineSettings: TimelineSettingsProps;
};

export function TimelineSettings({
  timelineSettings,
  onSettingsChange,
}: Props) {
  const [formData, setFormData] = useState<{
    startYear: number | string;
    endYear: number | string;
  }>({
    startYear: timelineSettings.startYear || "",
    endYear: timelineSettings.endYear || "",
  });

  const handleSettingsChange =
    (key: keyof TimelineSettingsProps) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      const numberValue = value.replace(/[^0-9-]/g, "");
      const yearValue = numValueOrZero(numberValue);

      setFormData({
        ...formData,
        [key]: yearValue,
      });
    };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { startYear, endYear } = formData;
    const newSettings: TimelineSettingsProps = {
      startYear: startYear === "-" ? null : startYear,
      endYear: endYear === "-" ? null : endYear,
    };

    onSettingsChange(newSettings);
  };

  const handleReset = () => {
    setFormData({
      startYear: "",
      endYear: "",
    });
    onSettingsChange({
      startYear: null,
      endYear: null,
    });
  };

  const handleUploadClick = () => {
    openModal({
      contentComponent: <CSVModal />,
    });
  };

  return (
    <TimelineSettingsContainer>
      <TimelineSettingsTitle>Timeline Settings</TimelineSettingsTitle>
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
          <button type="submit" onClick={handleSubmit}>
            Apply
          </button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
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
