import React from "react";
import "../components/Home.css";
import { Link } from "react-router-dom";
import LandingImg from "../components/landingimg.jpg";

export default function Home() {
  return (
    <div className="home">
      <div className="home_writing">
        <h1>Where creativity and inspiration intersect</h1>
        <br />
        <p>No more distractions, writers block, or mindless scrolling</p>
        <p>Become your best self with limitless possibilities</p>
        <br />
        <div className="home_btn">
          <button>
            <Link to="/signup" style={{ textDecoration: "none", color: "white" }}>
              Join Now
            </Link>
          </button>
          <button>Learn More</button>
        </div>
      </div>
      <div className="home_info">
        <img src={LandingImg} alt="" />
      </div>
      <div className="home_benefits">
        <div>
          <h3>Benefit 1</h3>
          <p>Get inspired and inspire</p>
        </div>
        <div>
          <h3>Benefit 2</h3>
          <p>Increase productivity and decrease distractions</p>
        </div>
        <div>
          <h3>Benefit 3</h3>
          <p>Become your best self</p>
        </div>
      </div>
      <div className="home_howto">
        <h1>How it works:</h1>
        <div className="home_pt1">
          <h5>Browse users based on hobby,city,username</h5>
          <img src="" alt="img" />
        </div>
        <div className="home_pt1">
          <img src="" alt="img" />
          <h5>Connect to find them quickly next time</h5>
        </div>
        <div className="home_pt1">
          <h5>Enter Focus Room (less than 15 min later)</h5>
          <img src="" alt="img" />
        </div>
        <div className="home_pt1">
          <img src="" alt="img" />
          <h5>Set timer to desired focus and break time & get started!!</h5>
        </div>
      </div>
      <div className="home_complete">
        <h3>When done upload on create page to inspire others!</h3>
      </div>
    </div>
  );
}
