import { Link } from "react-router-dom";
// import { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SignUp() {

  // const USER_REGEX = /^[a-zA-z][a-zA-Z0-9-_]{3,23}$/;
  // const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%]).{8,24}$/;

  return (
    <div className="signup template d-flex justify-content-center align-items-center vh-100">
      <div className="form_container p-5 rounded bg-white">
        <form>
          <h3 className="text-center">Sign Up</h3>
          <div className="mb-2">
            <label htmlFor="fname"> First Name:</label>
            <input type="text" placeholder="Enter First Name" className="form-control" />
          </div>
          <div className="mb-2">
            <label htmlFor="lname"> Last Name:</label>
            <input type="text" placeholder="Enter Last Name" className="form-control" />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Password:</label>
            <input type="email" placeholder="Enter Email" className="form-control" />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Confirm Password:</label>
            <input type="password" placeholder="Enter Password" className="form-control" />
          </div>
          <div className="d-grid mt-2">
            <button className="btn btn-primary">Sign Up</button>
          </div>
          <p className="text-end mt-2">
            Already Registered 
            <Link to="/login" className="ms-2">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
