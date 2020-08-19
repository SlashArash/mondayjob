import React, { useState } from "react";

import "./Main.scss";
import Header from "components/Header";
import SearchBar from "components/SearchBar";
import MyMap from "components/MyMap";
import Drawer from "components/Drawer";

const Main = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [info, setInfo] = useState();

  const handleGetAgenst = async () => {
    setLoading(true);
    setShowDrawer(true);

    const response = await fetch(
      "https://run.mocky.io/v3/b1f53cec-54eb-4524-8038-437e869ac639"
    );
    if (response.ok) {
      const json = await response.json();
      setInfo(json);
      setLoading(false);
    } else {
      alert("HTTP-Error: " + response.status);
      setLoading(false);
      setShowDrawer(false);
    }
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
          info={info}
          onClose={() => setShowDrawer(false)}
        />
      )}
    </main>
  );
};

export default Main;
