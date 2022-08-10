import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal(props) {
  return ReactDOM.createPortal (
    <div className="modalBackground">
      {props.children}
      <div className="clickOutside"></div>
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };