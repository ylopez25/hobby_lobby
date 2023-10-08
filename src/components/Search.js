import React from "react";
import "./Search.css";

export default function Search({ users , search, handleChange}) {
 

  return (
    <div>
      <div className="search">
        <input type="search" placeholder="Search..." value={search} onChange={handleChange} />
        <select name="city" id="city">
          <option value="brooklyn">Brooklyn</option>
          <option value="New York">New York</option>
        </select>
      </div>
    </div>
  );
}
