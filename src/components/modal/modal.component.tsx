import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalForm from "./modalForm.component";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { toggleForm, setEditDataID } from "../../features/form/formSlice";
import { useForm } from "../../app/hooks";

interface Result {
  name: string;
  category: string;
  content: string;
}

const FormModal: React.FC = () => {
  const formStatus = useAppSelector((status) => status.formStatus.openForm);
  const [show, setShow] = useState(false);
  const formProps: Result = useForm();
  useEffect(() => {
    setShow(formStatus);
  }, [formStatus]);

  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(setEditDataID("-1"));
    dispatch(toggleForm(false));
  };
  const handleShow = () => {
    dispatch(setEditDataID("-1"));
    dispatch(toggleForm(true));
  };

  console.log(show);
  return (
    <>
      <Button variant="primary" onClick={handleShow} className="mx-auto">
        Add Note
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalForm {...formProps} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" form="newNoteForm">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormModal;
