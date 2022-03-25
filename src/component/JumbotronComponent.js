import React from "react";
import "../assets/index.css";
import banner from "../assets/img/banner.png";

const JumbotronComponent = () => {
  return (
    <div>
      <img src={banner} className="banner" alt="banner" />
      <div>
        <button className="button2">Lihat lainnya</button>
      </div>
    </div>
  );
};

export default JumbotronComponent;
