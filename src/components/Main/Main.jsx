import React from "react";

import "./Main.scss";
import Header from "components/Header";
import SearchBar from "components/SearchBar";

const Main = () => {
  return (
    <div className="main-container">
      <Header />
      <SearchBar />
      <main>main</main>
      {false && <aside>right panel</aside>}
    </div>
  );
};

export default Main;
