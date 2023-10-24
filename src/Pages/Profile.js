import React from 'react';
import {Link} from 'react-router-dom';
import "../components/Profile.css";

import { useState, useEffect } from "react";

export default function Profile() {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [cities, setCities] = useState([]);


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
        const { data, cities, err } = json;
        console.log(data, "data");
        console.log(cities, "cities");
        if (res.ok) {
          setCities(cities);
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

  const renderContent = () => {
    if (users.length === 0) {
      return `No results for ${search}`;
    } else {
      return users.map((user) => {
        const photos = user.photos;
        return (
          <div className="userCard">
  
            <div className="userinfo">
              <div className="userinfo_left">
                <img src={user.pic} alt="img" />
                <p>{user.user_name}</p>
              </div>
            
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className="profile">
      <div className='profile_details'>
        <img src="https://i.pinimg.com/280x280_RS/f2/bc/cf/f2bccfe2d804dd173c3e6f75d3e84ed7.jpg" alt="img" />
        <h1>Yesenia Lopez</h1>
        <p>@username</p>
        <button>Edit Profile</button>
      </div>
      <div className="profile_icons">
        <svg>
        <path d="M9 19.5a1.75 1.75 0 1 1 .001-3.501A1.75 1.75 0 0 1 9 19.5M22.25 16h-8.321c-.724-2.034-2.646-3.5-4.929-3.5S4.795 13.966 4.071 16H1.75a1.75 1.75 0 0 0 0 3.5h2.321C4.795 21.534 6.717 23 9 23s4.205-1.466 4.929-3.5h8.321a1.75 1.75 0 0 0 0-3.5M15 4.5a1.75 1.75 0 1 1-.001 3.501A1.75 1.75 0 0 1 15 4.5M1.75 8h8.321c.724 2.034 2.646 3.5 4.929 3.5s4.205-1.466 4.929-3.5h2.321a1.75 1.75 0 0 0 0-3.5h-2.321C19.205 2.466 17.283 1 15 1s-4.205 1.466-4.929 3.5H1.75a1.75 1.75 0 0 0 0 3.5"></path>
        </svg>
        <svg >
          <Link to="/create">
          <path d="M22 10h-8V2a2 2 0 0 0-4 0v8H2a2 2 0 0 0 0 4h8v8a2 2 0 0 0 4 0v-8h8a2 2 0 0 0 0-4"></path>
          </Link>
        </svg>
      </div>
      <div className="profile_gallery">
        <img src="1" alt="img1" />
        <img src="1" alt="img1" />
        <img src="1" alt="img1" />
        <img src="1" alt="img1" />
      </div>
      {renderContent()}
    </div>
  )
}
