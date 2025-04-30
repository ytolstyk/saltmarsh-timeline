import { useMemo, useState } from "react";
import { RenderIf } from "./RenderIf";
import {
  ButtonsWrapper,
  TagLabel,
  TagsWrapper,
  TagsModalWrapper,
} from "./TagsModal.styles";
import { useEvents } from "./useEvents";
import { CheckedTags } from "./types";
import { closeModal } from "./modalHelper";
import { BsCheck } from "react-icons/bs";

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
    closeModal();
  };

  const handleReset = () => {
    setCheckedTags({});
    closeModal();
  };

  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setModalCheckedTags({
      ...modalCheckedTags,
      [name]: checked,
    });
  };

  const sortedTags = useMemo(() => {
    return tags.sort();
  }, [tags]);

  return (
    <TagsModalWrapper>
      <h1>Filter by Tags</h1>
      <RenderIf condition={tags.length === 0}>
        <p>No tags available</p>
      </RenderIf>
      <RenderIf condition={tags.length > 0}>
        <TagsWrapper>
          {sortedTags.map((tag, index) => (
            <TagLabel key={index} $isChecked={modalCheckedTags[tag]}>
              {tag}
              <RenderIf condition={Boolean(modalCheckedTags[tag])}>
                <BsCheck />
              </RenderIf>
              <input
                type="checkbox"
                name={tag}
                onChange={handleCheckChange}
                checked={Boolean(modalCheckedTags[tag])}
              />
            </TagLabel>
          ))}
        </TagsWrapper>
        <ButtonsWrapper>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
          <button type="button" onClick={handleSubmit}>
            Apply
          </button>
        </ButtonsWrapper>
      </RenderIf>
    </TagsModalWrapper>
  );
}
