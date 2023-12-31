import React from "react";

import EditButton from "../buttons/edit-button";
import RemoveButton from "../buttons/remove-button";
import ArchiveButton from "../buttons/archive-button";
import Icons from "../icons/icons.component";

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
    // Summary part
    return (
      <>
        <tr>
          <td>
            <Icons category={"Idea"} />
            <span className="mx-2">Idea</span>
          </td>
          <td>{summary.ideaLive}</td>
          <td>{summary.idea - summary.ideaLive}</td>
        </tr>
        <tr>
          <td>
            <Icons category={"Task"} />
            <span className="mx-2">Task</span>
          </td>
          <td>{summary.taskLive}</td>
          <td>{summary.task - summary.taskLive}</td>
        </tr>
        <tr>
          <td>
            <Icons category={"though"} />
            <span className="mx-2">Random Thought</span>
          </td>
          <td>{summary.thoughtLive}</td>
          <td>{summary.thought - summary.thoughtLive}</td>
        </tr>
      </>
    );
  }

  return (
    // Notes part
    <tr>
      <td>
        <Icons category={category} />
        <span className="mx-2" style={{ fontWeight: "bold" }}>
          {name}
        </span>
      </td>
      <td>{`${created}`}</td>
      <td>{category === "Thought" ? "Random Thougt" : category}</td>
      <td style={{ fontWeight: "bold" }}>{content}</td>
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
