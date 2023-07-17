import React from "react";
import "./Feed.css";

export default function Feed({ users }) {
  return (
    <div className="users">


      {users.map((user) => {
        return (
          <div className="userCard">
            <div className="userinfo">
              <h3>{user.username} </h3>
              <img src={user.pic} alt="img" />
              <p>{user.city}</p>
              <p>follow</p>
            </div>
            <div className="grades">
              <p>{user.city}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
