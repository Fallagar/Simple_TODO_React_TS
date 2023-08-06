import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { Note } from "../../app/mock";
import { addItem, editNote } from "../../features/notes/noteSlice";
import { v4 as uuidv4 } from "uuid";
import { setEditDataID, toggleForm } from "../../features/form/formSlice";

interface Props {
  name: string;
  category: string;
  content: string;
}

const ModalForm: React.FC<Props> = ({ name, category, content }) => {
  const [formData, setFormData] = useState({
    name: name,
    category: category,
    content: content,
  });
  const dispatch = useAppDispatch();
  const idForEdit = useAppSelector(
    (state: RootState) => state.formStatus.dataId
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (idForEdit === "-1") {
      const note = new Note(
        formData.name,
        formData.category,
        formData.content,
        "live",
        false,
        uuidv4()
      );
      dispatch(addItem({ ...note }));
    } else {
      const note = new Note(
        formData.name,
        formData.category,
        formData.content,
        "",
        false,
        "-2"
      );
      dispatch(
        editNote({
          name: note.name,
          category: note.category,
          content: note.content,
          dates: note.dates,
          id: idForEdit,
        })
      );
    }
    dispatch(setEditDataID("-1"));
    dispatch(toggleForm(false));
  }

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(formData);
  };
  return (
    <Form id="newNoteForm" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formNoteName">
        <Form.Label>Name of the note</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formNoteCategory">
        <Form.Label>Select Category</Form.Label>
        <Form.Select
          size="lg"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Task">Task</option>
          <option value="Idea">Idea</option>
          <option value="Thought">Random Thought</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formNoteContent">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="content"
          value={formData.content}
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
};

export default ModalForm;
