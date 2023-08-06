import React from "react";
import Button from "react-bootstrap/Button";
import { useAppDispatch } from "../../app/hooks";
import { toggleForm, setEditDataID } from "../../features/form/formSlice";

interface Props {
  id: string;
}

const EditButton: React.FC<Props> = ({ id }) => {
  const dispatch = useAppDispatch();
  const openForm = (): void => {
    dispatch(toggleForm(true));
    dispatch(setEditDataID(id));
  };
  return (
    <Button variant="primary" onClick={openForm}>
      Edit
    </Button>
  );
};

export default EditButton;
