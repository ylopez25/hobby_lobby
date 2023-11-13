import React from "react";
import "../components/Home.css";

export default function Home() {
  return (
    <div className="home">
    <div className='home_writing'>
      <h1>Where creativity and inspiration intersect</h1>
      <br/>
      <p>No more distractions, writers block, or mindless scrolling</p>
      <p>Become your best self with limitless possibilities</p>
      <br/>
      <button>Join Now</button>
      <button>Learn more</button>
    </div>
    <div className='home_info'>
    <img src="https://img.freepik.com/free-vector/design-strategy-abstract-concept-illustration-design-plan-development-project-idea-implementation-project-requirements-web-design-drawing-software-app_335657-3379.jpg?size=626&ext=jpg&ga=GA1.1.1517186467.1699838927&semt=ais" alt="" />
    </div>
    </div>
  );
}
