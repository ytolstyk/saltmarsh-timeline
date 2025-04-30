import { Controls, Prompt } from "./DeleteAllModal.styles";
import { closeModal } from "./modalHelper";
import { useEvents } from "./useEvents";

export function DeleteAllModal() {
  const { overrideEvents } = useEvents();

  const handleDeleteClick = () => {
    overrideEvents([]);
    closeModal();
  };

  return (
    <div>
      <Prompt>Are you sure you want to delete everything?</Prompt>
      <Controls>
        <button onClick={closeModal}>No, it was an accident</button>
        <button onClick={handleDeleteClick}>F**k it!</button>
      </Controls>
    </div>
  );
}
