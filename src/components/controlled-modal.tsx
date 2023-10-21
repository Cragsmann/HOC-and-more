import { MouseEventHandler } from "react";
import styled from "styled-components";

export const Modalbackground = styled.div`
  background-color: grey;
  width: 100%;
  height: 100%;
`;

export const ModalContent = styled.div`
  margin: 12% auto;
  padding: 24px;
  background-color: wheat;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ControlledModal: React.FC<{
  children: React.ReactNode;
  showModal: boolean;
  onClose: MouseEventHandler;
}> = ({ showModal, onClose, children }) => {
  return (
    <>
      {showModal && (
        <Modalbackground onClick={onClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose}>HideModal</button>
            {children}
          </ModalContent>
        </Modalbackground>
      )}
    </>
  );
};
