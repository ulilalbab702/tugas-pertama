import React from "react";
import artikel from "../assets/img/artikel.png";
const NewsComponent = () => {
  return (
    <div>
      <text className="berita">Berita & Artikel</text>
      <text className="beragam-artikel">
        Beragam artikel menarik seputar United Tractors dan lainnya
      </text>
      <div className="menu-berita">
        <img src={artikel} className="artikel" />
        <text className="view-artikel">10.5 K Views | 3 Months Ago</text>
        <text className="judul-artikel">
          Aplikasi UT Connect telah hadir di IOS
        </text>
        <text className="isi-artikel">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </text>
        <button className="baca">Baca Selengkapnya</button>
      </div>
      <div className="menu-berita-d">
        <img src={artikel} className="artikel" />
        <text className="view-artikel">10.5 K Views | 3 Months Ago</text>
        <text className="judul-artikel">
          Aplikasi UT Connect telah hadir di IOS
        </text>
        <text className="isi-artikel">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </text>
      </div>
      <div className="menu-berita-d2">
        <img src={artikel} className="artikel" />
        <text className="view-artikel">10.5 K Views | 3 Months Ago</text>
        <text className="judul-artikel">
          Aplikasi UT Connect telah hadir di IOS
        </text>
        <text className="isi-artikel">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s.
        </text>
      </div>
      <button className="button4">Lihat lainnya</button>
    </div>
  );
};

export default NewsComponent;
