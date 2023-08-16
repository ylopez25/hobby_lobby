import React from "react";
import { useState } from "react";
import "./Feed.css";

export default function Feed({ users }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  let displayUsers = users;

  if (search) {
    displayUsers = users.filter((user) => {
      const { username, city } = user;
      const fullUsername = `${username} ${city}`.toLowerCase();
      return fullUsername.includes(search.toLowerCase());
    });
  }

  const renderContent = () => {
    if (displayUsers.length === 0) {
      return `No results dfor ${search}`;
    } else {
      return displayUsers.map((user) => {
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
              <div className="hobby_pics">
                {photos?.map((img, id) => (
                  <img key={id} src={img} alt="img" />
                ))}
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <div className="search">
        <input value={search} type="text" placeholder="search by username" onChange={handleChange} />
      </div>
      <div className="users">{renderContent()}</div>
    </div>
  );
}
