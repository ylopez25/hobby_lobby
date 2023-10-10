import React from "react";
import "./Search.css";

export default function Search({ users, search, handleChange }) {

  return (
    <div>
      <div className="searchbar">
        <input type="search" placeholder="Search..." value={search} onChange={handleChange} />

        <select onChange={(e) => {
          const city = users.find(el => el.city === e.target.value)
          console.log(city)
        }}>
        {users? users.map((user,id)=> {
          return (
            <option key={id} value={user.city} >{user.city}</option>
          )
        }) : null}
        </select>
      </div>
    </div>
  );
}
