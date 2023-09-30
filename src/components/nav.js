import React from "react";
// import logo from "./Your paragraph text.png";
import "./nav.css";

export default function nav() {
  return (
    <div className="nav">
      <div className="nav_left">
        {/* <img src={logo} style={{ width:"40px" }} alt='logo'/> */}
        <h3>HL</h3>
        <p>Inspiration</p>
        <p>Create</p>
        <p>Settings</p>
      </div>
      <div className="nav_right">
        <p>Login</p>
        <p>Sign up</p>
      </div>
    </div>
  );
}
