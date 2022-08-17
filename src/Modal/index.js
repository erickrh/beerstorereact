import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal(props) {
  return ReactDOM.createPortal (
    <div className="modalBackground">
      <div className="modalWindow">
        {props.children}
      </div>
      <div className="clickOutside"></div>
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };