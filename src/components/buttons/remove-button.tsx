import React from "react";
import Button from "react-bootstrap/Button";
import { removeItem } from "../../features/notes/noteSlice";
import { useAppDispatch } from "../../app/hooks";

interface Props {
  id: string;
}

const RemoveButton: React.FC<Props> = ({ id }) => {
  const dispatch = useAppDispatch();
  function removeItemFromStore(target: string) {
    dispatch(removeItem(target));
  }
  return (
    <Button variant="danger" onClick={() => removeItemFromStore(id)}>
      Remove
    </Button>
  );
};

export default RemoveButton;
