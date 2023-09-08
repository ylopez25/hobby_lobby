import React, { useState } from "react";
import "./Hobbies.css";

export default function Hobbies({ users }) {
  const [item, setItem] = useState(users);
  const menuItems = [...new Set(users.map((el) => el.skill))];

  const filterItems = (cat) => {
    const filter = users.filter((val) => val.skill === cat);
    setItem(filter);
  };
  return (
    <div className="hobbies">
      <center>
        <h3>H O B B I E S :</h3>
      </center>
      <div className="hobby">
        {menuItems?.map((hobby) => {
          return <p onClick={() => filterItems(hobby)}>{hobby}</p>;
        })}
      </div>
      <div className="btn">
        <button onClick={() => setItem(users)}>All</button>
      </div>
      <div className="result">

      {item?.map((el, id) => {
        return <p key={id}>{el.username}</p>;
      })}
      </div>
    </div>
  );
}
