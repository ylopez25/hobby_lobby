import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Signup.css";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
export default function SignUp() {
  const userRef = useRef();
  const errRef = useRef();

  //user
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  //pwd
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  //pwd match

  const [pwdMatch, setPwdMatch] = useState("");
  const [validPwdMatch, setValidPwdMatch] = useState(false);
  const [validPwdFocus, setValidPwdFocus] = useState(false);

  //success or err message
  const [success, SetSuccess] = useState(true);
  const [err, setErr] = useState("");

  //user sign in
  useEffect(() => {
    userRef.current.focus();
  }, []);

  //user validation
  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  //match
  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result, "pwd");
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === pwdMatch;
    setValidPwd(match);
  }, [pwd, pwdMatch]);

  //remove err message once theres a change in pwd
  useEffect(() => {
    setErr("");
  }, [user, pwd, pwdMatch]);

  return (
    <div className="signup template d-flex justify-content-center align-items-center vh-100">
      <div className="form_container p-5 rounded bg-white">
        <form>
          <p ref={errRef} aria-live="assertive">
            {err}
          </p>
          <h3 className="text-center">Sign Up</h3>
          <div className="mb-2">
            <label htmlFor="fname">
              {" "}
              First Name:
              <span className={validName ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className={validName || !user ? "hide" : "invalid"}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>

            <input type="text" id="fname" ref={userRef} onChange={(e) => setUser(e.target.value)} required aria-invalid={validName ? "false" : "true"} aria-describedby="uidnote" onFocus={() => setUserFocus(true)} onBlur={() => setUserFocus(false)} placeholder="Enter First Name" className="form-control" />

            <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
              <FontAwesomeIcon icon={faInfoCircle} />
              _4 to 24 characters. <br />
              Must begin with a letter. <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>
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
  );
}
