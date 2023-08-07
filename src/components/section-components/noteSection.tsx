import React from "react";

import TableComponent from "../table-component/table.component";
import { v4 as uuidv4 } from "uuid";
import Table from "react-bootstrap/Table";
import { useSummary } from "../../app/hooks";
import { useFilteredData } from "../../app/hooks";

interface Props {
  purpose: string;
  title: string;
  summary?: object;
}

const NoteSection: React.FC<Props> = ({ purpose, title }) => {
  //Table changes depending on purpose
  const data = useFilteredData(purpose);
  const summary = useSummary();
  if (purpose === "summary") {
    return (
      <section className="p-5 d-flex flex-column">
        <div className="">{title}</div>
        <div>
          <Table hover borderless>
            <thead>
              <tr>
                <th className="bg-black text-white col-4">Category</th>
                <th className="bg-black text-white col-4">Live</th>
                <th className="bg-black text-white col-4">Archived</th>
              </tr>
            </thead>
            <tbody style={{ fontWeight: "bold" }}>
              <TableComponent summary={summary} id={"-1"} />
            </tbody>
          </Table>
        </div>
      </section>
    );
  }
  return (
    <section className="px-5 d-flex flex-column">
      <div>{title}</div>
      <div>
        <Table hover borderless>
          <thead>
            <tr>
              <th className="bg-black text-white col-1">Name</th>
              <th className="bg-black text-white col-1">Created</th>
              <th className="bg-black text-white col-1">Category</th>
              <th className="bg-black text-white col-5">Content</th>
              <th className="bg-black text-white col-2">Dates</th>
              <th className="bg-black text-white col-1">Controls</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((note) => {
                return <TableComponent {...note} key={uuidv4()} />;
              })}
          </tbody>
        </Table>
      </div>
    </section>
  );
};

export default NoteSection;
