import React from "react";
import { useState } from "react";
import "./Feed.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Feed({ users, displayUsers, search}) {
  const [expand, setExpanded] = useState([]);

  const handleToggle = (id) => {
    if (!expand.includes(id)) {
      const selectedId = [...expand, id];
      setExpanded(selectedId);
    } else {
      const removeId = expand.filter((currId) => currId !== id);
      setExpanded(removeId);
    }
  };

  const showAllimgs = () => {
    const allIds = users.map((user) => user.id);
    setExpanded(allIds);
  };

  const closeAllimgs = () => {
    setExpanded([]);
  };
  const renderContent = () => {
    if (displayUsers.length === 0) {
      return `No results for ${search}`;
    } else {
      return displayUsers.map((user) => {
        const photos = user.photos;
        return (
          <div className="userCard">
            <div className="gallery">
              {expand.includes(user.id) ? (
                <div className="gallery_pics">
                  {photos?.map((img, id) => (
                    <img key={id} src={img.photo} alt="img" />
                  ))}
                </div>
              ) : (
                <div className="gallery_pic">
                  <img src={photos[0].photo} alt="img" />
                </div>
              )}
            </div>{" "}
            <div className="userinfo">
              <div className="userinfo_left">
                <img src={user.pic} alt="img" />
                <p>
                  {user.user_name}
                </p>
              </div>
              <div>
                <button onClick={() => handleToggle(user.id)}> {expand.includes(user.id) ? "- " : "+"}</button>
                <button onClick={() => handleToggle(user.id)}> {expand.includes(user.id) ? "- " : "+"}</button>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <ToggleButtonGroup className="expand">
        <ToggleButton onClick={showAllimgs}>Gallery Mode</ToggleButton>
        <ToggleButton onClick={closeAllimgs}>Skim Mode</ToggleButton>
      </ToggleButtonGroup>
      <div className="users">{renderContent()}</div>
    </div>
  );
}
