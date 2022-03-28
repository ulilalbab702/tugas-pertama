import React from "react";
import map from "../assets/img/map.png";
import b from "../assets/img/app.png";

const MapComponent = () => {
  return (
    <div>
      <text className="cabang">Cabang United Tractors</text>
      <text className="saat">
        Saat ini tim kami telah tersebar disetiap penjuru indonesia, Hubungi <b>1500 072</b> Layanan contact center 24 jam untuk Pelanggan.
      </text>
      <img src={map} className="map" />
      <img src={b} className="download-app" />
    </div>
  );
};

export default MapComponent;
