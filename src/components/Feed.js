import React from "react";
import { useState } from "react";
import "./Feed.css";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Feed({ users }) {
  const [search, setSearch] = useState("");
  const [expand, setExpanded] = useState([]);

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
              <p>Hobby: {user.skill}</p>
              <p>City: {user.city}</p>
              <div>
                <button onClick={() => handleToggle(user.id)}> {expand.includes(user.id) ? "Collapse " : "Gallery"}</button>
              </div>
            </div>
            <div className="hobby">
              {expand.includes(user.id) ? (
                <div className="hobby_pics">
                  {photos?.map((img, id) => (
                    <img key={id} src={img} alt="img" />
                  ))}
                </div>
              ) : (
                <div className="hobby_pics">
                  <img src={photos[0]} alt="img" />
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
      {/* <div className="search">
        <TextField id="outlined-controlled" value={search} onChange={handleChange} label="USERNAME OR CITY" size="small" halfWidth focused />
        <ToggleButtonGroup>
          <ToggleButton onClick={showAll}>Expand all imgs</ToggleButton>
          <ToggleButton onClick={closeAll}>Close all imgs</ToggleButton>
        </ToggleButtonGroup>
      </div> */}
      <div className="users">{renderContent()}</div>
    </div>
  );
}
