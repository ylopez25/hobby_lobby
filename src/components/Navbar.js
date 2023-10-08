import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function nav() {
  return (
    <div className="nav">
      <div className="nav_left">
        <h3>
          <Link to="/">HL</Link>
        </h3>
        <p>
          <Link to="/users">Inspiration</Link>
        </p>
        <p>
          <Link to="/create">Create</Link>
        </p>
        <p>
          <Link to="/profile">Profile</Link>
        </p>
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
