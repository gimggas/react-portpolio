import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { GrSearch } from "react-icons/gr";

export default function Search() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <GrSearch />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="search"
      >
        <GrSearch />
        <input type="text" placeholder="Search..."></input>
        <Modal.Header closeButton></Modal.Header>
      </Modal>
    </>
  );
}
