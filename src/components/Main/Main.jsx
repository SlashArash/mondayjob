import React from "react";

import "./Main.scss";
import Header from "components/Header";
import SearchBar from "components/SearchBar";
import MyMap from "components/MyMap";
import Drawer from "components/Drawer";

const Main = () => {
  return (
    <main className="main-container">
      <div className="main-body">
        <Header />
        <SearchBar />
        <MyMap />
      </div>
      <Drawer loading={false} agents={undefined} />
    </main>
  );
};

export default Main;
