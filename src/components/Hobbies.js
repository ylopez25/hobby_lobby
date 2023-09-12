import React, { useState } from "react";
import "./Hobbies.css";

export default function Hobbies({ menuItems, filterUsers, resetUsers }) {
  const [activeHobby, setActiveHobby] = useState(null);
  return (
    <div className="hobbies">
      <center>
        <h3>H O B B I E S :</h3>
      </center>
      <div className="hobby">
        {menuItems?.map((hobby) => {
          return (
            <p
              style={activeHobby === hobby ? { backgroundColor: "#d1e8e2" } : { backgroundColor: "#116466" }}
              onClick={() => {
                setActiveHobby(hobby);
                filterUsers(hobby);
              }}
            >
              {hobby}
            </p>
          );
        })}
      </div>
      <div className="btn">
        <button
          onClick={() => {
            setActiveHobby(null);
            resetUsers();
          }}
        >
          All
        </button>
      </div>
      <div className="result"></div>
    </div>
  );
}
