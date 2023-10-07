import React from "react";
import Search from "../components/Search.js";
import Hobbies from "../components/Hobbies.js";
import Loading from "../components/Loading.js";
import Error from "../components/Error.js";

import { useState, useEffect } from "react";

export default function Index() {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

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

  //filter items
  const filterUsers = (cat) => {
    const filteredUsers = allUsers.filter((val) => val.skill === cat);
    setUsers(filteredUsers);
    // setActiveHobby(cat);
  };

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else if (err) {
      return <Error err={err} />;
    } else {
      return (
        <div className="app">
          <Search users={users} />
          <Hobbies menuItems={menuItems} filterUsers={filterUsers} resetUsers={() => setUsers(allUsers)} />
        </div>
      );
    }
  };

  return <div>{renderContent()}</div>;
}
