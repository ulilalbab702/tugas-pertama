import React from "react";
import "../assets/index.css";
import vid from "../assets/img/vid.png";
import vid2 from "../assets/img/vid2.png";
import vid3 from "../assets/img/vid3.png";

const VideoComponent = () => {
  return (
    <div>
      <div>
        <h1 className="h">Highlight Video</h1>
        <p className="beragam">
          Beragam video menarik yang membahas seputar tips untuk unit dan
          lainnya{" "}
        </p>
      </div>
      <div>
        <img src={vid} className="vid" />
        <text className="view-vid">10.5 K Views | 3 Months Ago</text>
        <text className="judul-vid">
          Pantau alat berat di tambang lebih mudah dengan UT Connect
        </text>
      </div>
      <div>
        <img src={vid2} className="vid2" />
        <text className="view-vid2">10.5 K Views | 3 Months Ago</text>
        <text className="judul-vid2">
        Bomag sudah tersedia di UT Connect sekarang!
        </text>
      </div>
      <div className="vid-on">
          <img src={vid3} className="vid3" />
          <text className="view-vid3">10.5 K Views | 3 Months Ago</text>
          <text className="judul-vid3">
          Bagaimana cara memantau unit dengan UT connect?
        </text>
        <button className="button-vid">Putar Video</button>
      </div>
      <button className="button3">Lihat lainnya</button>
    </div>
  );
};

export default VideoComponent;
