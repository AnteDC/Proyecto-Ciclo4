import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, {useState} from "react";

const ModalLogin = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="info" onClick={handleShow}>
          Ingresar
        </Button>
  
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title><b>Ingresar</b></Modal.Title>
          </Modal.Header>
          <Modal.Body>Este es el espacio para el login</Modal.Body>
          <Modal.Footer>
            <Button variant="info" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default ModalLogin