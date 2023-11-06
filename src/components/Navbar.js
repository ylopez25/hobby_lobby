import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Nav() {

  return (
    <div className="nav">
      <div className="nav_left">
        <h3>
          <Link to="/" style={{textDecoration:"none", color:"white"}}>HL</Link>
        </h3>
        <p>
          <Link to="/users" style={{textDecoration:"none", color:"white"}}>Inspiration</Link>
        </p>
        <p>
          <Link to="/create" style={{textDecoration:"none", color:"white"}}>Create</Link>
        </p>
        <p>
          <Link to="/profile" style={{textDecoration:"none", color:"white"}}>Profile</Link>
        </p>
        <p>
          <Link to="/focus" style={{textDecoration:"none", color:"white"}}>Focus</Link>
        </p>
      </div>
      <div className="nav_right">
        <p>
          <Link to="/login" style={{textDecoration:"none", color:"white"}}> Login </Link>
          </p>
        <p>
        <Link to="/signup" style={{textDecoration:"none", color:"white"}}>Sign Up </Link>
        </p>
      </div>
    </div>
  );
}
