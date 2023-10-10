import React from "react";
import "./Search.css";

export default function Search({ users, search, handleChange, cities }) {
  return (
    <div>
      <div className="searchbar">
        <input type="search" placeholder="Search..." value={search} onChange={handleChange} />

        <select
        //  onChange={(e) => {
        //   const city = cities.find(el => el.id === e.target.value)
        //   console.log(city)
        // }}
        >
          {cities?.map((city, id) => {
            return (
              <option key={id} value={city.name}>
                {city.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
