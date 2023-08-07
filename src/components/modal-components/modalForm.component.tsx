import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { Note } from "../../app/mock";
import { ADD_ITEM, EDIT_NOTE } from "../../features/notes/noteSlice";
import { v4 as uuidv4 } from "uuid";
import { SET_EDIT_DATA_ID, TOGGLE_FORM } from "../../features/form/formSlice";

interface Props {
  name: string;
  category: string;
  content: string;
}

const ModalForm: React.FC<Props> = ({ name, category, content }) => {
  //Default values for inputs and select
  const [formData, setFormData] = useState({
    name: name,
    category: category,
    content: content,
  });
  const dispatch = useAppDispatch();
  //Getting form purpose from store
  const idForEdit = useAppSelector(
    (state: RootState) => state.formStatus.dataId
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    // Add new note
    if (idForEdit === "-1") {
      const note = new Note(
        formData.name,
        formData.category,
        formData.content,
        "live",
        false,
        uuidv4()
      );
      dispatch(ADD_ITEM({ ...note }));
    } else {
      //OR Edit note
      const note = new Note(
        formData.name,
        formData.category,
        formData.content,
        "",
        false,
        "-2"
      );
      dispatch(
        EDIT_NOTE({
          name: note.name,
          category: note.category,
          content: note.content,
          dates: note.dates,
          id: idForEdit,
        })
      );
    }
    dispatch(SET_EDIT_DATA_ID("-1"));
    dispatch(TOGGLE_FORM(false));
  }

  //Form watching
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
  };
  return (
    <Form id="newNoteForm" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formNoteName">
        <Form.Label>Name of the note</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          required
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formNoteCategory">
        <Form.Label>Select Category</Form.Label>
        <Form.Select
          size="lg"
          name="category"
          value={formData.category}
          required
          onChange={handleChange}
        >
          <option value="Task">Task</option>
          <option value="Idea">Idea</option>
          <option value="Thought">Random Thought</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formNoteContent">
        <Form.Label>Note content</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="content"
          required
          value={formData.content}
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
};

export default ModalForm;
