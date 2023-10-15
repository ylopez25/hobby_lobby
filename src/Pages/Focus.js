import React from "react";
import "../components/Focus.css";
import Timer from "../components/Timer.js";

export default function Focus() {
  return (
    <div className="pomodoro">
      <div>
        <h1>Focus</h1>
        <Timer />
      </div>
      <div>
        <button>START</button>
      </div>
      <div>
        <button>STOP</button>
      </div>
    </div>
  );
}
