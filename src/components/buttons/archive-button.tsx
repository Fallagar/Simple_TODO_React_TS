import React from "react";
import Button from "react-bootstrap/Button";
import { useAppDispatch } from "../../app/hooks";
import { changeStatus } from "../../features/notes/noteSlice";

interface Props {
  id: string;
}

const ArchiveButton: React.FC<Props> = ({ id }) => {
  const dispatch = useAppDispatch();
  function archivate(target: string) {
    dispatch(changeStatus(target));
  }
  return (
    <Button variant="warning" onClick={() => archivate(id)}>
      Archive
    </Button>
  );
};

export default ArchiveButton;
