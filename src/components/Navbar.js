import { Link } from "react-router-dom";
import {useState} from 'react';
import "./Navbar.css";

export default function Nav() {
  const [value, setValue] = useState('fruit');

 const handleChange = (event) => {

   setValue(event.target.value);

 };
  return (
    <div className="nav">
      <div className="nav_left">
        <h3>
          <Link to="/" style={{textDecoration:"none", color:"black"}}>HL</Link>
        </h3>
        <p>
          <Link to="/users" style={{textDecoration:"none", color:"black"}}>Inspiration</Link>
        </p>
        <p>
          <Link to="/create" style={{textDecoration:"none", color:"black"}}>Create</Link>
        </p>
        <p>
          <Link to="/profile" style={{textDecoration:"none", color:"black"}}>Profile</Link>
        </p>
        <p>
          <Link to="/focus" style={{textDecoration:"none", color:"black"}}>Focus</Link>
        </p>
        {/* <p>Settings</p> */}
      </div>
      <div className="nav_right">
        <p>
          <Link to="/login" style={{textDecoration:"none", color:"black"}}> Login </Link>
          </p>
        <p>
        <Link to="/signup" style={{textDecoration:"none", color:"black"}}>Sign Up </Link>
        </p>
      </div>
    </div>
  );
}
