import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  transform: ${({ show }) => (show ? 'translateY(0vh)' : 'translateY(-100vh)')};
  opacity: ${({ show }) => (show ? '1' : '0')}
`;

const ModalHeader = styled.div``;

const ModalBody = styled.div``;

const ModalFooter = styled.div``;

const App = ({ show, close, children }) => (
  <ModalWrapper show={show}>
    <ModalHeader>
      <h3>Modal Header</h3>
      <span className="close-modal-btn" onClick={close}>×</span>
    </ModalHeader>
    <ModalBody>
      <p>
        {children}
      </p>
    </ModalBody>
    <ModalFooter>
      <button className="btn-cancel" onClick={close}>CLOSE</button>
      <button className="btn-continue">CONTINUE</button>
    </ModalFooter>
  </ModalWrapper>
);

export default App;
