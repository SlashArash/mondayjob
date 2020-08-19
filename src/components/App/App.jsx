import React from "react";

import "./App.scss";
import Main from "components/Main";
import Sidebar from "components/Sidebar";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
