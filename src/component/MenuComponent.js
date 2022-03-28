import React from "react";
import "../assets/index.css";
import menu1 from "../assets/img/Frame.png";
import menu2 from "../assets/img/menu2.png";
import menu3 from "../assets/img/menu3.png";
import menu4 from "../assets/img/menu4.png";
import menu5 from "../assets/img/menu5.png";

const MenuComponent = () => {
  return (
    <div>
      <div className="menu">
        <h2 className="fitur">Fitur UT Connect</h2>
        <p className="berikut">
          Berikut adalah fitur yang dikembangkan UT Connect untuk memberikan
          layanan terbaik bagi pelanggan United Tractors
        </p>
      </div>
      <div className="menu-aktif">
        <img src={menu1} className="menu1" />
        <p className="nama-menu1">Equipment Monitoring</p>
        <button className="button-menu1">Preview</button>
      </div>
      <div className="menu-d">
        <img src={menu2} className="menu2" />
        <p className="nama-menu2">
          Order Tracking
        </p>
      </div>
      <div className="menu-d1">
        <img src={menu3} className="menu3" />
        <p className="nama-menu3">KlikUT</p>
      </div>
      <div className="menu-d2">
        <img src={menu4} className="menu4" />
        <p className="nama-menu4">Montly Report</p>
      </div>
      <div className="menu-d3">
        <img src={menu5} className="menu5" />
        <p className="nama-menu5">My<br/>Ticket</p>
      </div>
      <div>
      <button className="button-see">Lihat lebih banyak</button>
      </div>
    </div>
  );
};

export default MenuComponent;
