import React from "react";
import "./Hobbies.css";

export default function Hobbies({ users }) {
  return (
    <div className="hobbies">
      <center>
        <h3>Hobbies</h3>
      </center>
      <div className="hobby">
        {users.map((hobby) => {
          return <p>{hobby.skill}</p>;
        })}
      </div>
      <div className="hobbyBtn">
        <button>filter</button>
        <button>clear</button>
      </div>
    </div>
  );
}
