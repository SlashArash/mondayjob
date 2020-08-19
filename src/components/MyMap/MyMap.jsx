import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import "./MyMap.scss";

const zoom = 13;
const position = [51.505, -0.09];

const MyMap = () => {
  const handleClick = () => {
    alert("clicked");
  };
  return (
    <div className="map-container">
      <Map center={position} zoom={zoom} onClick={handleClick}>
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup.
            <br />
            Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </div>
  );
};

export default MyMap;
