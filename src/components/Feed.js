import React from "react";
import { useState } from "react";
import "./Feed.css";

export default function Feed({ users }) {
  const [search, setSearch] = useState("");
  const [expand, setExpanded] = useState([]);
  const [follow, setFollowing] = useState(false);

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

  const handleToggle = (id) => {
    if (!expand.includes(id)) {
      const selectedId = [...expand, id];
      setExpanded(selectedId);
    } else {
      const removeId = expand.filter((currId) => currId !== id);
      setExpanded(removeId);
    }
  };

  //create a function that will expand all ids
  const showAll = () => {
    const allIds = users.map((user) => user.id);
    setExpanded(allIds);
  };
  //create a function thast will close all
  const closeAll = () => {
    setExpanded([]);
  };
  const renderContent = () => { 
    if (displayUsers.length === 0) {
      return `No results for ${search}`;
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
              <button onClick={() => handleToggle(user.id)}> {expand.includes(user.id) ? "Show less" : "show more"}</button>
              <button onClick={() => setFollowing(!follow)}> {follow ? "follow" : "following"}</button>
            </div>
            <div className="hobby">
              <div>
                <h2>Show Room</h2>
              </div>

              {expand.includes(user.id) && (
                <div className="hobby_pics">
                  {photos?.map((img, id) => (
                    <img key={id} src={img} alt="img" />
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <div className="search">
        <input value={search} type="text" placeholder="search by username or city" onChange={handleChange} />
        <button onClick={showAll}>Show All</button>
        <button onClick={closeAll}>Close All</button>
      </div>
      <div className="users">{renderContent()}</div>
    </div>
  );
}
