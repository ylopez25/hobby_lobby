import React, { useState } from "react";
import "./Hobbies.css";

export default function Hobbies({ menuItems, filterUsers, resetUsers }) {
  const [activeHobby, setActiveHobby] = useState(null);
  return (
    <div className="hobbies">
      <p>&#60;</p>
      <div className="hobby">
        <div></div>
        {menuItems?.map((hobby) => {
          return (
            <p
              style={activeHobby === hobby ? { backgroundColor: "#d1e8e2" } : { backgroundColor: "#0000" }}
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
      <p>&#62;</p>
      <div className="hobbies_all">
        <p
          onClick={() => {
            setActiveHobby(null);
            resetUsers();
          }}
        >
          All
        </p>
      </div>
    </div>
  );
}
