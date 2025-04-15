import { useEffect, useState } from "react";
import { ModalCloseButton, ModalContent, ModalOverlay } from "./Modal.styles";
import { OPEN_MODAL, CLOSE_MODAL } from "./modalHelper";

export function Modal() {
  const [modalContent, setModalContent] = useState(null);

  function handleModalOpen(event: CustomEventInit) {
    setModalContent(event.detail.contentComponent);
  }

  function handleModalClose() {
    setModalContent(null);
  }

  useEffect(() => {
    const handleKeypress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleModalClose();
      }
    };

    const removeKeyListener = () =>
      document.removeEventListener("keyup", handleKeypress);

    if (modalContent) {
      document.addEventListener("keyup", handleKeypress);
    } else {
      removeKeyListener();
    }

    return removeKeyListener;
  }, [modalContent]);

  useEffect(() => {
    document.addEventListener(OPEN_MODAL, handleModalOpen);
    document.addEventListener(CLOSE_MODAL, handleModalClose);
    window.addEventListener("hashchange", handleModalClose);

    return function () {
      document.removeEventListener(OPEN_MODAL, handleModalOpen);
      document.removeEventListener(CLOSE_MODAL, handleModalClose);
      window.removeEventListener("hashchange", handleModalClose);
    };
  }, []);

  if (!modalContent) {
    return null;
  }

  return (
    <ModalOverlay onClick={handleModalClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalCloseButton onClick={handleModalClose}>X</ModalCloseButton>
        {modalContent}
      </ModalContent>
    </ModalOverlay>
  );
}
