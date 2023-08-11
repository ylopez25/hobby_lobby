import React from "react";
import "./Hobbies.css";

export default function Hobbies({ users }) {
  //filter users based on onclick 

  // const filteredUsers = (e) => {
  //   console.log(e.target.value, 'e.t')
  //  // let selectedUser = e.target.value;
  // }

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
