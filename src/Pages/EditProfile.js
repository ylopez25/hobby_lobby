import React from "react";
//import axios from "axios";
import "../components/EditProfile.css";
//import { useState, useEffect } from "react";
//import { useHistory } from "react-router-dom";
import { useNavigate, useParams, Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

export default function EditProfile(props) {

  const usersss = props.location.state.userss;
  console.log(usersss, 'props?')
  // const [users, setUsers] = useState([]);
  // const [cities, setCities] = useState([]);
  // let history = useHistory();
  // const navigate = useNavigate();
  // let { id } = useParams();
  // let userInfo = {
  //   pic: '',
  //   userName : '',
  //   name: '',
  //   city: '',
  // }

  // const updateProfile = (info, id) => {
  //   try {
  //     axios.put(`${API_URL}/v2/users/${id}`, info).then((response) => {
  //       const neuVar = [...users, ...cities];
  //       const index = neuVar.findIndex((user) => user.id === Number(id));
  //       neuVar[index] = info;
  //       //setUsers(neuVar);
  //       navigate(`/users/${id}`);
  //       // history.push(`/users/${id}`);
  //     });
  //   } catch (err) {
  //     console.log("err", err);
  //   }
  // };


  // const handleChange = (e) => {
  //  // setUsers(e.target.value);
  //   setCities(e.target.value)
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   updateProfile(id);
  // };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-black">
      <div className="form_container p-5 rounded text-white mb-1 text-center">
        <form >
          <h3>Edit Profile Info:</h3>
          <div>
            <label htmlFor="new_img">Profile Picture:</label>
            <input type="text" className="form-control" />
          </div>
          <div>
            <label htmlFor="new_username">Username:</label>
            <input type="text" className="form-control" />
          </div>
          <div>
            <label htmlFor="new_name">Name:</label>
            <input type="text" className="form-control" />
          </div>
          <div>
            <label htmlFor="new_city">City:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mt-3 d-grid">
            <button className="btn btn-secondary mb-2">
                Submit
            </button>
            <button className="btn btn-secondary">
              <Link to="/profile" style={{ textDecoration: "none", color: "white" }}>
                Back
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
