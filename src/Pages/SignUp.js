import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from "./Login";
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
  const [success, setSuccess] = useState(false);
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
    setValidPwdMatch(match);
  }, [pwd, pwdMatch]);

  //remove err message once theres a change in pwd
  useEffect(() => {
    setErr("");
  }, [user, pwd, pwdMatch]);

  //submit function

  const handleSubmit = async (e) => {
    e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErr("Invalid Entry");
            return;
        }
    setSuccess(true);
    console.log("submitted");
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Welcome to Hobby Lobby!</h1>
          <p>Your creativity awaits</p>
          <Login />
        </section>
      ) : (
        <div className="signup template d-flex justify-content-center align-items-center vh-100">
          <div className="form_container p-5 rounded bg-black">
            <form onSubmit={handleSubmit}>
              <p ref={errRef} aria-live="assertive">
                {err}
              </p>
              <h3 className="text-center">Sign Up</h3>
              <div className="mb-2">
                <label htmlFor="username">
                  {" "}
                  Username:
                  <span className={validName ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className={validName || !user ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </label>

                <input type="text" id="username" ref={userRef} onChange={(e) => setUser(e.target.value)} required aria-invalid={validName ? "false" : "true"} aria-describedby="uidnote" onFocus={() => setUserFocus(true)} onBlur={() => setUserFocus(false)} placeholder="Enter First Name" className="form-control" />

                <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  _4 to 24 characters. <br />
                  Must begin with a letter. <br />
                  Letters, numbers, underscores, hyphens allowed.
                </p>
              </div>
              <div className="mb-2">
                <label htmlFor="password">
                  Password:
                  <span className={validPwd ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className={validPwd || !pwd ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </label>

                <input type="password" id="password" onChange={(e) => setPwd(e.target.value)} required aria-invalid={validPwd ? "false" : "true"} aria-describedby="pwdnote" onFocus={() => setPwdFocus(true)} onBlur={() => setPwdFocus(false)} placeholder="Enter Password" className="form-control" />

                <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  8 to 24 characters. <br />
                  Must include uppercase and lowercase letters, a number and a special character <br />
                  Allowed special characters:
                  <span aria-label="exclamation mark">!</span>
                  <span aria-label="at symbol">@</span>
                  <span aria-label="hashtag"> #</span>
                  <span aria-label="dollar sign">$</span>
                  <span aria-label="percent">%</span>
                </p>
              </div>
              <div className="mb-2">
                <label htmlFor="confirm_pwd">
                  Confirm Password:
                  <FontAwesomeIcon icon={faCheck} className={validPwdMatch && pwdMatch ? "valid" : "hide"} />
                  <FontAwesomeIcon icon={faTimes} className={validPwdMatch || !pwdMatch ? "hide" : "invalid"} />
                </label>
                <input type="password" id="confirm_pwd" onChange={(e) => setPwdMatch(e.target.value)} value={pwdMatch} required aria-invalid={validPwdMatch ? "false" : "true"} aria-describedby="confirmnote" onFocus={() => setValidPwdFocus(true)} onBlur={() => setValidPwdFocus(false)} className="form-control" />
                <p id="confirmnote" className={validPwdFocus && !validPwdMatch ? "instructions" : "offscreen"}>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  Must match the first password input field.
                </p>
              </div>
              <div className="d-grid mt-2">
                <button className="btn btn-primary" disabled={!validName || !validPwd || !validPwdMatch ? true : false}>
                  Sign Up
                </button>
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
      )}
    </>
  );
}
