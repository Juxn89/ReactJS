import React from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

export const CalendarModal = () => {
  const colseModal = () => {
    console.log('closing...');
  }
  return (
    <Modal isOpen={true} /*onAfterOpen={afterOpenModal} onRequestClose={closeModal}*/ style={customStyles} className="modal" overlayClassName="modal-fondo" closeTimeoutMS={200}>
      <h1>Hola Mundo</h1>
      <br/>
      <span>Hola de nuevo...</span>
    </Modal>
  )
}
