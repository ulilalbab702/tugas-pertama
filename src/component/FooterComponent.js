import React from "react";
import ios from "../assets/img/app-store.png";
import droid from "../assets/img/google-play.png";
import fb from "../assets/img/fb.png";
import ig from "../assets/img/ig.png";
import twit from "../assets/img/twit.png";

const FooterComponent = () => {
  return (
    <div>
      <div className="footer-container">
        <text className="about-utc">
          <b>UT Connect</b> is a website application developed to provide the
          best service for customer regarding equipment information and ordering
          information.
        </text>
        <text className="download-text">Download</text>
        <img src={ios} className="icon-ios" />
        <img src={droid} className="icon-droid" />
        <div>
          <text className="menu-utc">UT Connect</text>
          <ul className="menu-utc-li">
            <li>Equipment</li>
            <li>Order</li>
            <li>Notification</li>
            <li>Other</li>
            <li>About</li>
          </ul>
        </div>
        <div>
          <text className="get-in">Get In touch</text>
          <table className="menu-getin">
            <tr>
              <td>Telepon</td>
              <td>:</td>
              <td>(021) 24579999</td>
            </tr>
            <tr>
              <td>Website</td>
              <td>:</td>
              <td>http://www.unitedtractors.com</td>
            </tr>
            <tr>
              <td>Alamat</td>
              <td>:</td>
              <td>
                Jl. Raya Bekasi No.KM.22, RT.7/RW.1, Cakung Bar., Kec. Cakung,
                Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13910
              </td>
            </tr>
          </table>
        </div>
        <div>
          <text className="follow">Follow us</text>
          <img src={fb} className="icon-fb"/>
          <text className="t-fb">facebook.com/ptunitedtractorstbk</text>
          <img src={ig} className="icon-ig" />
          <text className="t-ig">instagram.com/ut.mobileapp</text>
          <img src={twit} className="icon-twit" />
          <text className="t-twit">twitter.com/unitedtractors</text>
        </div>
      </div>
      <div className="nav-bottom">
        <text className="copy">© 2019 United Tractors App - All  rights reserved</text>
        <text className="privacy">Privacy</text>
        <text className="term">Terms & Conditions</text>
        <text className="faq">FAQ</text>
      </div>
    </div>
  );
};

export default FooterComponent;
