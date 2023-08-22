import React from "react";
import "./Hobbies.css";

export default function Hobbies({ users }) {
  return (
    <div className="hobbies">
      <center>
        <h3>H O B B I E S :</h3>
      </center>
      <div className="hobby">
        {users.map((hobby) => {
          return <p>{hobby.skill}</p>;
        })}
      </div>
      <div className="btn">
        <button>filter</button>
        <button>clear</button>
      </div>
    </div>
  );
}
