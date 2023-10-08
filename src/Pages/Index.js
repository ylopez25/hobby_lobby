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

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    console.log("app rendered");
    async function fetchData() {
      try {
        setErr("");
        setLoading(true);
        const res = await fetch(`${API_URL}/v2/users?include=photos`);
        const json = await res.json();
        console.log(json, "json");
        const { data, err } = json;
        console.log(data, "data");
        if (res.ok) {
          setUsers(data);
          setAllUsers(data);
          setLoading(false);
        } else {
          setErr(err);
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
        setErr(`err: ${err.message}`);
      }
    }
    fetchData();
  }, []);

  const menuItems = [...new Set(allUsers.map((el) => el.skill))];

  const filterUsers = (cat) => {
    const filteredUsers = allUsers.filter((val) => val.skill === cat);
    setUsers(filteredUsers);
  };

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else if (err) {
      return <Error err={err} />;
    } else {
      return (
        <div className="app">
          <Search users={users} search={search} handleChange={handleChange} />
          <Hobbies menuItems={menuItems} filterUsers={filterUsers} resetUsers={() => setUsers(allUsers)} />
          <Feed displayUsers={displayUsers} search={search} users={users} />
        </div>
      );
    }
  };

  return <div>{renderContent()}</div>;
}