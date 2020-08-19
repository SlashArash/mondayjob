import React from "react";

import "./Main.scss";
import Header from "components/Header";
import SearchBar from "components/SearchBar";
import MyMap from "components/MyMap";

const Main = () => {
  return (
    <div className="main-container">
      <Header />
      <SearchBar />
      <MyMap />
      {false && <aside>right panel</aside>}
    </div>
  );
};

export default Main;
