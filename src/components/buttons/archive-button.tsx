import React from "react";
import Button from "react-bootstrap/Button";
import { useAppDispatch } from "../../app/hooks";
import { CHANGE_STATUS } from "../../features/notes/noteSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

interface Props {
  id: string;
}

const ArchiveButton: React.FC<Props> = ({ id }) => {
  // This button used to add or remove note from archive, changing status in the store of targeted note
  const dispatch = useAppDispatch();
  function archivate(target: string) {
    dispatch(CHANGE_STATUS(target));
  }
  return (
    <Button variant="warning" onClick={() => archivate(id)}>
      <FontAwesomeIcon icon={faCircleArrowDown} />
    </Button>
  );
};

export default ArchiveButton;
