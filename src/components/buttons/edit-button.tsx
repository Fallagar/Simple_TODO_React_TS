import React from "react";
import Button from "react-bootstrap/Button";
import { useAppDispatch } from "../../app/hooks";
import { TOGGLE_FORM, SET_EDIT_DATA_ID } from "../../features/form/formSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

interface Props {
  id: string;
}

const EditButton: React.FC<Props> = ({ id }) => {
  // This button used to edit notes. It opens form modal and setting edit note id
  const dispatch = useAppDispatch();
  const openForm = (): void => {
    dispatch(SET_EDIT_DATA_ID(id));
    dispatch(TOGGLE_FORM(true));
  };
  return (
    <Button variant="primary" onClick={openForm}>
      <FontAwesomeIcon icon={faPenToSquare} />
    </Button>
  );
};

export default EditButton;
