import React, {
    cloneElement,
    ComponentProps,
    FunctionComponent,
    ReactElement,
    ReactNode,
  } from "react";
  import useModal from "../hooks/useModal";
  import Modal from "./Modal";
  import './ModalButton.css';
  
  type ModalButtonProps = {
    trigger: ReactElement;
    modalProps?: Pick<
      ComponentProps<typeof Modal>,
      "children" | "className" | "header" | "leading" | "size" | "trailing" | "title"
    >;
    modalContent: ReactNode;
  };
  
  const ModalButton: FunctionComponent<ModalButtonProps> = ({
    trigger,
    modalProps,
    modalContent,
  }) => {
    const modalState = useModal();
  
    return (
      <>
        {cloneElement(trigger, {
          onClick: (event: any) => {
            event?.preventDefault();
            modalState.open();
          },
        })}
        <Modal
          open={modalState.isOpen}
          onClose={modalState.close}
          {...modalProps}
        >
          {modalContent}
        </Modal>
      </>
    );
  };
  
  export default ModalButton;
  