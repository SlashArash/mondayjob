import React from "react";

import "./Drawer.scss";

const Drawer = ({ agents, loading }) => {
  return (
    <aside className="drawer-container">
      {loading ? (
        <span>loading ...</span>
      ) : (
        <>
          {!agents ? (
            <span>Please select a location in map</span>
          ) : (
            <span>show agents</span>
          )}
        </>
      )}
    </aside>
  );
};

export default Drawer;
