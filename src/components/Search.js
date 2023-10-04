import React from "react";
import { useState } from "react";
import Feed from "./Feed";
import "./Search.css";

export default function Search({ users }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const input = e.target.value;
    setSearch(input);
  };
  let displayUsers = users;
  if (search) {
    displayUsers = users.filter((user) => {
      const { username, city } = user;
      const fullUsername = `${username} ${city}`.toLowerCase();
      return fullUsername.includes(search.toLowerCase());
    });
  }

  return (
    <div>
      <div className="search">
        <input type="search" placeholder="Search..." value={search} onChange={handleChange} />
      </div>
      <Feed displayUsers={displayUsers} search={search} users={users} />
    </div>
  );
}
