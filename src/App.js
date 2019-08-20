import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  transform: ${({ show }) => (show ? 'translateY(0vh)' : 'translateY(-100vh)')};
  opacity: ${({ show }) => (show ? '1' : '0')};
  background: white;
  border: 1px solid #d0cccc;
  box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2), 0 7px 20px 0 rgba(0,0,0,0.17);
  margin: 100px auto 0;
  transition: all .8s;
  width: 60%;
`;

const ModalHeader = styled.div`
  background: #263238;
  height: 40px;
  line-height: 40px;
  padding: 5px 20px;
  text-align: right;
`;

const ModalBody = styled.div``;

const ModalFooter = styled.div``;

const Cancel = styled.button``;

const Continue = styled.button``;

const CloseModal = styled.button``;

const App = ({ show, close, children }) => (
  <ModalWrapper show={show}>
    <ModalHeader>
      <h3>Modal Header</h3>
      <CloseModal onClick={close}>×</CloseModal>
    </ModalHeader>
    <ModalBody>
      <p>
        {children}
      </p>
    </ModalBody>
    <ModalFooter>
      <Cancel onClick={close}>CLOSE</Cancel>
      <Continue>CONTINUE</Continue>
    </ModalFooter>
  </ModalWrapper>
);

export default App;
