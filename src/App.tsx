import React from "react";
import NoteSection from "./components/section-components/noteSection";
import "./App.scss";

import ModalWithFrom from "./components/modal-components/modal.component";

const App: React.FC = () => {
  return (
    <div className="d-flex flex-column">
      {/* {Live notes} */}
      <NoteSection purpose="live" title="Live Notes" />
      {/* {Modal here because button needed after first section} */}
      <ModalWithFrom />
      {/* {Summary} */}
      <NoteSection purpose="summary" title="Notes Summary" />
      {/* {Archived notes} */}
      <NoteSection purpose="archive" title="Archived Notes" />
    </div>
  );
};

export default App;
