import React from "react";
import Button from "react-bootstrap/Button";
import { REMOVE_ITEM } from "../../features/notes/noteSlice";
import { useAppDispatch } from "../../app/hooks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

interface Props {
  id: string;
}

const RemoveButton: React.FC<Props> = ({ id }) => {
  // This button removes note from the store
  const dispatch = useAppDispatch();
  function REMOVE_ITEMFromStore(target: string) {
    dispatch(REMOVE_ITEM(target));
  }
  return (
    <Button variant="danger" onClick={() => REMOVE_ITEMFromStore(id)}>
      <FontAwesomeIcon icon={faTrashCan} />
    </Button>
  );
};

export default RemoveButton;
