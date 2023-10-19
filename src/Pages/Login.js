import { Link } from "react-router-dom";
import { useRef,useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


export default function Login() {
  const userRef = useRef();
  const errRef= useRef();
  //create states for pwd and email
const [pwd, setPwd] = useState('');
const [user, setUser] = useState('');
const [err, setErr] = useState('');

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
setErr('');
  }, [user, pwd])

  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100">
      <div className="form_container p-5 rounded bg-white">
        <p
        ref={errRef}
        aria-live='assertive'
        >
          {err}
        </p>
        <form>
          <h3 className="text-center">Sign In</h3>
          <div className="mb-2">
            <label htmlFor="username"> Username:</label>
            <input type="text" 
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            placeholder="Enter Username" 
            className="form-control"
            required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password:</label>
            <input type="password" 
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            placeholder="Enter Password" 
            className="form-control" 
            />
          </div>
          <div className="mb-2">
            <input type="checkbox" className="custom-control custom-checkbox" id="check" />
            <label htmlFor="check" className="custom-input-label ms-2">
              Remember me
            </label>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary">Sign In</button>
          </div>
          <p className="text-end mt-2">
            Forgot <Link href="/passwordreset">Password?</Link>
            <Link to="/signup" className="ms-2">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
