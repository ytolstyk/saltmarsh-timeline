import { useContext, useEffect, useMemo, useState } from "react";
import { CheckedTags, TimelineSettingsData } from "./types";
import {
  FormRow,
  RangeSelectorContainer,
  SelectedTagsCount,
  TimelineSettingsContainer,
  TimelineSettingsFormSection,
} from "./TimelineSettings.styles";
import { TagsModal } from "./TagsModal";
import { useTimelineSettings } from "./useTimelineSettings";
import { useEvents } from "./useEvents";
import { Button, Chip, Divider, RangeSlider, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import { CampaignContext } from "./CampaignContext";

export function TimelineSettings() {
  const { timelineSettings, update } = useTimelineSettings();
  const { campaign } = useContext(CampaignContext);
  const { minDateYears, maxDateYears } = useEvents();

  const [formData, setFormData] = useState<Partial<TimelineSettingsData>>({
    startYear: timelineSettings?.startYear ?? minDateYears,
    endYear: timelineSettings?.endYear ?? maxDateYears,
  });

  useEffect(() => {
    if (timelineSettings) setFormData(timelineSettings);
  }, [timelineSettings]);

  const handleYearRangeChange = (value: number[]) => {
    const [start, end] = value;

    setFormData({
      startYear: start,
      endYear: end,
    });
  };

  const handleYearRangeChangeEnd = (value: number[]) => {
    const [start, end] = value;

    update({
      ...timelineSettings,
      startYear: start,
      endYear: end,
    });
  };

  const handleExcludeDowntimeClick = (checked: boolean) => {
    update({
      ...timelineSettings,
      excludeDowntime: checked,
    });
  };

  const handleDatesReset = () => {
    update({
      ...timelineSettings,
      startYear: minDateYears,
      endYear: maxDateYears,
    });
  };

  const handleRestrictClick = () => {
    const restrictedData = {
      ...timelineSettings,
      ...{
        startYear: campaign?.campaignStartYear ?? minDateYears,
        endYear: campaign?.campaignEndYear ?? maxDateYears,
      },
    };

    update(restrictedData);
  };

  const handleCheckedTagsSubmit = (tagChanges: CheckedTags) => {
    update({
      ...timelineSettings,
      checkedTags: tagChanges,
    });
  };

  const handleTagsClick = () => {
    if (!timelineSettings) {
      return;
    }

    modals.open({
      title: "Filter by tags",
      size: "lg",
      children: (
        <TagsModal
          checkedTags={timelineSettings.checkedTags}
          setCheckedTags={handleCheckedTagsSubmit}
        />
      ),
    });
  };

  const selectedTagsCount = useMemo(() => {
    if (timelineSettings) {
      return Object.values(timelineSettings.checkedTags).filter((val) => val)
        .length;
    }

    return 0;
  }, [timelineSettings]);

  return (
    <>
      <Divider
        mt="xl"
        my="xs"
        label="Timeline Settings"
        labelPosition="center"
      />
      <TimelineSettingsContainer>
        <TimelineSettingsFormSection>
          <RangeSelectorContainer>
            <Text size="md" mt="sm" ta="center">
              Range in years
            </Text>
            <RangeSlider
              mt="lg"
              min={minDateYears}
              max={maxDateYears}
              onChange={handleYearRangeChange}
              onChangeEnd={handleYearRangeChangeEnd}
              minRange={1}
              value={[
                formData.startYear ?? minDateYears,
                formData.endYear ?? maxDateYears,
              ]}
              marks={[
                { value: minDateYears, label: minDateYears },
                { value: maxDateYears, label: maxDateYears },
              ]}
              step={1}
            />
          </RangeSelectorContainer>
          <FormRow>
            <Button variant="default" onClick={handleRestrictClick}>
              Use Campaign Timeline
            </Button>
            <Button variant="default" onClick={handleDatesReset}>
              Reset
            </Button>
          </FormRow>
          <Chip
            checked={timelineSettings.excludeDowntime}
            onChange={handleExcludeDowntimeClick}
          >
            Exclude downtime
          </Chip>
        </TimelineSettingsFormSection>
        <TimelineSettingsFormSection>
          <Button
            leftSection={
              selectedTagsCount === 0 ? null : (
                <SelectedTagsCount>{selectedTagsCount}</SelectedTagsCount>
              )
            }
            variant="default"
            onClick={handleTagsClick}
          >
            Filter by tags
          </Button>
        </TimelineSettingsFormSection>
      </TimelineSettingsContainer>
    </>
  );
}
