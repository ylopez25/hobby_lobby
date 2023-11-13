import React from "react";
import "../components/Home.css";
import { Link } from "react-router-dom";
import LandingImg from "../components/landingimg.png";

export default function Home() {
  return (
    <div className="home">
      <div className="home_writing">
        <h1>Where creativity and inspiration intersect</h1>
        <br />
        <p>No more distractions, writers block, or mindless scrolling</p>
        <p>Become your best self with limitless possibilities</p>
        <br />
        <button>
          <Link to="/users">Join Now</Link>
        </button>
        <button>Learn more</button>
      </div>
      <div className="home_info">
        <img src={LandingImg} alt="" />
      </div>
    </div>
  );
}
