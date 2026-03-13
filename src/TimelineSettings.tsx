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
import { Chip, Divider, RangeSlider, Text, Tooltip } from "@mantine/core";
import { useUserRole } from "./UserRoleContext";
import { LockedButton } from "./LockedButton";
import { modals } from "@mantine/modals";
import { CampaignContext } from "./CampaignContext";

export function TimelineSettings() {
  const { timelineSettings, update, setGuestFilters } = useTimelineSettings();
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

    if (isGuest) {
      setGuestFilters({ startYear: start, endYear: end });
      return;
    }

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

  const handleShowAllEventsClick = (checked: boolean) => {
    if (isGuest) {
      setGuestFilters({ showAllEvents: checked });
      return;
    }
    update({
      ...timelineSettings,
      showAllEvents: checked,
    });
  };

  const handleReverseOrderClick = (checked: boolean) => {
    if (isGuest) {
      setGuestFilters({ reverseOrder: checked });
      return;
    }
    update({
      ...timelineSettings,
      reverseOrder: checked,
    });
  };

  const handleDatesReset = () => {
    if (isGuest) {
      setGuestFilters({ startYear: null, endYear: null });
      setFormData({ startYear: minDateYears, endYear: maxDateYears });
      return;
    }

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
    if (isGuest) {
      setGuestFilters({ checkedTags: tagChanges });
      return;
    }

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

  const { isGuest } = useUserRole();
  const lockedReason = "Sign in to enable";

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
              pl="sm"
              pr="sm"
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
            <LockedButton
              locked={isGuest}
              lockedReason={lockedReason}
              variant="default"
              onClick={handleRestrictClick}
            >
              Use Campaign Timeline
            </LockedButton>
            <LockedButton
              locked={isGuest}
              lockedReason={lockedReason}
              variant="default"
              onClick={handleDatesReset}
            >
              Reset
            </LockedButton>
          </FormRow>
          <Tooltip label={lockedReason} disabled={!isGuest}>
            <span style={isGuest ? { pointerEvents: "none", opacity: 0.5, display: "contents" } : undefined}>
              <Chip
                checked={timelineSettings.excludeDowntime}
                onChange={isGuest ? undefined : handleExcludeDowntimeClick}
              >
                Exclude downtime
              </Chip>
            </span>
          </Tooltip>
          <Chip
            checked={timelineSettings.showAllEvents}
            onChange={handleShowAllEventsClick}
          >
            Show all events
          </Chip>
          <Chip
            checked={timelineSettings.reverseOrder}
            onChange={handleReverseOrderClick}
          >
            Reverse order
          </Chip>
        </TimelineSettingsFormSection>
        <TimelineSettingsFormSection>
          <LockedButton
            locked={false}
            lockedReason={lockedReason}
            leftSection={
              selectedTagsCount === 0 ? null : (
                <SelectedTagsCount>{selectedTagsCount}</SelectedTagsCount>
              )
            }
            variant="default"
            onClick={handleTagsClick}
          >
            Filter by tags
          </LockedButton>
        </TimelineSettingsFormSection>
      </TimelineSettingsContainer>
    </>
  );
}
