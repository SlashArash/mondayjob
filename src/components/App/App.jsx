import React from "react";
import { I18nextProvider } from "react-i18next";

import i18n from "locate/i18n";
import "./App.scss";
import Main from "components/Main";
import Sidebar from "components/Sidebar";

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <Sidebar />
        <Main />
      </div>
    </I18nextProvider>
  );
};

export default App;
