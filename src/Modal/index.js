import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import { TodoContext } from '../TodoContext';

function Modal(props) {
  const { setOpenModal } = React.useContext(TodoContext);

  const onCancel = () => {
    document.querySelector('.filterFormContainer').classList.add('hideFilterFormContainer');
    setTimeout(() => {
      setOpenModal(false);
    }, 400);
  };

  return ReactDOM.createPortal (
    <div className="modalBackground">
      <div className="modalWindow">
        {props.children}
      </div>
      <div className="clickOutside" onClick={onCancel}></div>
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };