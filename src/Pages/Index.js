import React from "react";
import Search from "../components/Search.js";
import Hobbies from "../components/Hobbies.js";
import Loading from "../components/Loading.js";
import Error from "../components/Error.js";
import Feed from "../components/Feed.js";

import { useState, useEffect } from "react";

export default function Index() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [cities, setCities] = useState([]);
  const [toggle, setToggle] = useState(false)

  let displayUsers = users;

  //search input change
  const handleChange = (e) => {
    const input = e.target.value;
    setSearch(input);
  };

  //handle toggle 
  const handleToggle = () => {
   setToggle(!toggle)
  }
  //search filtering
  if (search) {
    displayUsers = users.filter((user) => {
      const { user_name, city } = user;
      const fullUsername = `${user_name} ${city}`.toLowerCase();
      return fullUsername.includes(search.toLowerCase());
    });
  }

  //sort
  displayUsers = users.sort((a, b) => {
    console.log(a, "a?");
    if (a["id"] < b["id"]) {
      return toggle ? -1 : 1;
    } else if (a["id"] > b["id"]) {
      return toggle ? 1 : -1;
    } else {
      return 0;
    }
  });

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    console.log("app rendered");
    async function fetchData() {
      try {
        setErr("");
        setLoading(true);
        const res = await fetch(`${API_URL}/v2/users?include=photos`);
        const json = await res.json();
        const { data, cities, err } = json;
        if (res.ok) {
          setCities(cities);
          setUsers(data);
          setAllUsers(data);
          setLoading(false);
        } else {
          throw new Error(err.message)
        }
      } catch (err) {
        setErr(`err: ${err.message}`);
      }finally {
        setLoading(false)
      }
    }
    fetchData();
  }, []);

  //list of unique skills
  const menuItems = [...new Set(allUsers.map((el) => el.skill))];

  //filter users by skill
  const filterbySkill = (cat) => {
    const filteredUsers = allUsers.filter((val) => val.skill === cat);
    setUsers(filteredUsers);
  };

  //city list menu
  const citiesMenu = [...new Set(cities.map((el) => el.name))];

  //filter cities
  const filterbyCity = (city) => {
    const filterUsersCity = allUsers.filter((x) => x.city_name === city);
    setUsers(filterUsersCity)
  }

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else if (err) {
      return <Error err={err} />;
    } else {
      return (
        <div className="app">
          <Search filterbyCity={filterbyCity} 
          citiesMenu={citiesMenu}
           search={search} 
           handleChange={handleChange} />
           <button onClick={handleToggle}>
            {toggle ? "^" : "v"}
           </button>
          <Hobbies menuItems={menuItems} filterbySkill={filterbySkill} resetUsers={() => setUsers(allUsers)} />
          <Feed displayUsers={displayUsers} search={search} users={users} allUsers={allUsers} />
        </div>
      );
    }
  };

  return <div>{renderContent()}</div>;
}
