import React from "react";
import axios from "axios";
import "../components/EditProfile.css";
import { useState, useEffect } from "react";
//import { useHistory } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

export default function EditProfile() {
  const [users, setUsers] = useState([]);
  const [cities, setCities] = useState([]);
  // let history = useHistory();
  const navigate = useNavigate();
  let { id } = useParams();

  const updateProfile = (info, id) => {
    try {
      axios.put(`${API_URL}/v2/users/${id}`, info).then((response) => {
        const neuVar = [...users, ...cities];
        const index = neuVar.findIndex((user) => user.id === Number(id));
        neuVar[index] = info;
        setUsers(neuVar);
        navigate(`/users/${id}`);
        // history.push(`/users/${id}`);
      });
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(id);
  };

  return (
    <div>
      <h1>Edit</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new_img">Profile Picture:</label>
        <input type="text" />
        <label htmlFor="new_username">Username:</label>
        <input type="text" />
        <label htmlFor="new_name">Name:</label>
        <input type="text" />
        <label htmlFor="new_city">City:</label>
        <input type="text" />
        <button>Submit</button>
        <button>Back</button>
      </form>
    </div>
  );
}
