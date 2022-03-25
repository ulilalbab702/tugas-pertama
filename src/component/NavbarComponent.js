import React from "react";
import "../assets/index.css";
import a from "../assets/img/Vector.png";
import logo from "../assets/img/Logo UT1x2.png";
import user from "../assets/img/user.png";


const NavbarComponent = () => {
  return (
    <div>
      <div className="Nav">
        <img src={a} className="a" alt="a"/>
        <div className="text1">Download UT Connect Mobile App</div>
        <div className="text2">About UT Connect</div>
        <div className="text3">How To Login</div>
      </div>
      <div className="Nav2">
        <img src={logo} className="logo" alt="logo" />
        <img src={user} className="user" alt="user" />
      </div>
    </div>
  );
};

export default NavbarComponent;
