export const OPEN_MODAL = "modal-open";
export const CLOSE_MODAL = "modal-close";

const closeModalEvent = new CustomEvent(CLOSE_MODAL);

export type ModalComponentProps = {
  contentComponent: React.ReactNode;
};

export const openModal = ({ contentComponent }: ModalComponentProps) => {
  const modalProps = { contentComponent };
  const openModalEvent = new CustomEvent(OPEN_MODAL, { detail: modalProps });

  document.dispatchEvent(openModalEvent);
};

export const closeModal = () => {
  document.dispatchEvent(closeModalEvent);
};
