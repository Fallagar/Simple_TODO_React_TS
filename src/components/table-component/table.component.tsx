import React from "react";

import EditButton from "../buttons/edit-button";
import RemoveButton from "../buttons/remove-button";
import ArchiveButton from "../buttons/archive-button";

interface Props {
  name?: string;
  category?: string;
  content?: string;
  status?: string;
  id: string;
  dates?: string[];
  created?: string | Boolean;
  summary?: {
    idea: number;
    ideaLive: number;
    thought: number;
    thoughtLive: number;
    task: number;
    taskLive: number;
  };
}

const TableComponent: React.FC<Props> = ({
  name = "",
  category = "",
  created = "",
  content = "",
  dates = [""],
  status = "",
  id = "",
  summary,
}) => {
  if (summary) {
    return (
      <>
        <tr>
          <td>Idea</td>
          <td>{summary.ideaLive}</td>
          <td>{summary.idea - summary.ideaLive}</td>
        </tr>
        <tr>
          <td>Task</td>
          <td>{summary.taskLive}</td>
          <td>{summary.task - summary.taskLive}</td>
        </tr>
        <tr>
          <td>Summary table</td>
          <td>{summary.thoughtLive}</td>
          <td>{summary.thought - summary.thoughtLive}</td>
        </tr>
      </>
    );
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{`${created}`}</td>
      <td>{category === "Thought" ? "Random Thougt" : category}</td>
      <td>{content}</td>
      <td>{dates.join(", ")}</td>
      <td>
        <ArchiveButton id={id} />
        <EditButton id={id} />
        <RemoveButton id={id} />
      </td>
    </tr>
  );
};

export default TableComponent;
