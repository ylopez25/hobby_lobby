import React from "react";
import "./nav.css";

export default function nav() {
  return (
    <div className="nav">
      <div className="nav_left">
        <h3>HL</h3>
        <p>Inspiration</p>
        <p>Create</p>
        <p>Profile</p>
        <p>Focus</p>
        <p>Settings</p>
      </div>
      <div className="nav_right">
        <p>Login</p>
        <p>Sign up</p>
      </div>
    </div>
  );
}
