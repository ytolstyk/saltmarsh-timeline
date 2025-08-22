import { useMemo, useState } from "react";
import { RenderIf } from "./RenderIf";
import { ButtonsWrapper, ChipWrapper } from "./TagsModal.styles";
import { useEvents } from "./useEvents";
import { CheckedTags } from "./types";
import { modals } from "@mantine/modals";
import { Button, Chip } from "@mantine/core";
import { showNotification } from "./notificationHelper";

type Props = {
  checkedTags: CheckedTags;
  setCheckedTags: (val: CheckedTags) => void;
};

export function TagsModal({ checkedTags, setCheckedTags }: Props) {
  const { tags } = useEvents();
  const [modalCheckedTags, setModalCheckedTags] =
    useState<CheckedTags>(checkedTags);

  const handleSubmit = () => {
    setCheckedTags(modalCheckedTags);
    const selectedTagsCount = Object.values(modalCheckedTags).filter(
      (val) => val
    ).length;

    const message = selectedTagsCount
      ? `Applied ${selectedTagsCount} tags to filter events`
      : "No tags selected, showing all events";

    showNotification({
      title: "Tags Updated",
      message,
    });
    modals.closeAll();
  };

  const handleReset = () => {
    setCheckedTags({});

    showNotification({
      title: "Tags Reset",
      message: "All tags have been reset, showing all events",
    });

    modals.closeAll();
  };

  const handleCheckChange = (tag: string) => (checked: boolean) => {
    setModalCheckedTags({
      ...modalCheckedTags,
      [tag]: checked,
    });
  };

  const sortedTags = useMemo(() => {
    return tags.sort();
  }, [tags]);

  return (
    <div>
      <RenderIf condition={tags.length === 0}>
        <p>No tags available</p>
      </RenderIf>
      <RenderIf condition={tags.length > 0}>
        {sortedTags.map((tag, index) => (
          <ChipWrapper key={index}>
            <Chip
              checked={Boolean(modalCheckedTags[tag])}
              onChange={handleCheckChange(tag)}
              name={tag}
              value={tag}
              variant="filled"
            >
              {tag}
            </Chip>
          </ChipWrapper>
        ))}
        <ButtonsWrapper>
          <Button variant="default" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Apply
          </Button>
        </ButtonsWrapper>
      </RenderIf>
    </div>
  );
}
