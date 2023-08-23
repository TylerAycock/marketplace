import "./Modal.css";
import { Fragment } from "react";
import { createPortal } from "react-dom";

const Backdrop = ({modal, setModal}) => {
  return <div className="overlay" onClick={()=>setModal(!modal)}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="modal-content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<Backdrop modal={props.modal} setModal={props.setModal}/>, portalElement)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </Fragment>
  );
};

export default Modal;
