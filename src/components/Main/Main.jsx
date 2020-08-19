import React, { useState } from "react";

import "./Main.scss";
import Header from "components/Header";
import SearchBar from "components/SearchBar";
import MyMap from "components/MyMap";
import Drawer from "components/Drawer";

const Main = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [agents, setAgents] = useState();

  const handleGetAgenst = async () => {
    setLoading(true);
    setShowDrawer(true);

    const result = await fetch(
      "https://run.mocky.io/v3/b1f53cec-54eb-4524-8038-437e869ac639"
    );
    setAgents(result);
    setLoading(false);
    setShowDrawer(true);
  };

  return (
    <main className="main-container">
      <div className="main-body">
        <Header />
        <SearchBar />
        <MyMap onSelectALocation={handleGetAgenst} />
      </div>
      {showDrawer && (
        <Drawer
          loading={isLoading}
          agents={agents}
          onClose={() => setShowDrawer(false)}
        />
      )}
    </main>
  );
};

export default Main;
