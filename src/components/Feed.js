import React from "react";
import "./Feed.css";

export default function Feed({ users }) {
  console.log(users.photodump, "users");

  return (
    <div className="users">
      {users.map((user) => {
        const photos = user.photodump;
        console.log(user.photodump, "user");
        return (
          <div className="userCard">
            <div className="userinfo">
              <h3>{user.username} </h3>
              <img src={user.pic} alt="img" />
              <p>{user.city}</p>
              <p>follow</p>
            </div>
            <div className="hobby">
              <div>
                <h2>Profile pics</h2>
              </div>
              <div className='hobby_pics'>
              {photos?.map((img, id) => (
                <img key={id} src={img} alt="img" />
              ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
