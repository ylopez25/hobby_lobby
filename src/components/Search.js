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
      const { user_name, city } = user;
      const fullUsername = `${user_name} ${city}`.toLowerCase();
      return fullUsername.includes(search.toLowerCase());
    });
  }

  return (
    <div>
      <div className="search">
        <input type="search" placeholder="Search..." value={search} onChange={handleChange} />
        <select name="city" id="city">
          <option value="brooklyn">Brooklyn</option>
          <option value="New York">New York</option>
        </select>
      </div>
      <Feed displayUsers={displayUsers} search={search} users={users} />
    </div>
  );
}
