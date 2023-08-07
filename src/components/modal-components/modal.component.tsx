import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalForm from "./modalForm.component";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { TOGGLE_FORM, SET_EDIT_DATA_ID } from "../../features/form/formSlice";
import { useForm } from "../../app/hooks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

interface Result {
  name: string;
  category: string;
  content: string;
}

const ModalWithFrom: React.FC = () => {
  //This component creates Bootstrap modal, and adding button for add new note
  const formStatus = useAppSelector((status) => status.formStatus.openForm);
  const [show, setShow] = useState(false);
  //Get form props to pass to the form
  const formProps: Result = useForm();
  useEffect(() => {
    setShow(formStatus);
  }, [formStatus]);

  const dispatch = useAppDispatch();
  //On close, resets store to default
  const handleClose = () => {
    dispatch(SET_EDIT_DATA_ID("-1"));
    dispatch(TOGGLE_FORM(false));
  };
  //On close, resets store to default, to add new note
  const handleShow = () => {
    dispatch(SET_EDIT_DATA_ID("-1"));
    dispatch(TOGGLE_FORM(true));
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="mx-auto">
        <FontAwesomeIcon icon={faCirclePlus} /> <span>Add Note</span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalForm {...formProps} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" form="newNoteForm">
            Save Note
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalWithFrom;
