import React, { useState } from "react";
import "./Hobbies.css";

export default function Hobbies({ menuItems, filterUsers, resetUsers }) {
  const [activeHobby, setActiveHobby] = useState(null);
  return (
    <div className="hobbies">
      <div className="hobby">
        {menuItems?.map((hobby) => {
          return (
            <p
              style={activeHobby === hobby ? { backgroundColor: "#d1e8e2" } : { backgroundColor: "#C0CFE7" }}
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
      <div className="hobbies_all">
        <p
          style={resetUsers ? { backgroundColor: "#d1e8e2" } : { backgroundColor: "#116466" }}
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
