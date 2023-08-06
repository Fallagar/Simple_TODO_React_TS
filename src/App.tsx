import React from "react";
import NoteSection from "./components/section-components/noteSection";
import "./App.scss";

import FormModal from "./components/modal/modal.component";

const App: React.FC = () => {
  return (
    <div className="d-flex flex-column">
      <NoteSection purpose="live" title="Live Table" />
      <FormModal />
      <NoteSection purpose="summary" title="Summary" />
      <NoteSection purpose="archive" title="Archive Table" />
    </div>
  );
};

export default App;
