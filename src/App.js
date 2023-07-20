import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/nav";
import Update from "./components/Update";
import Feed from "./components/Feed";
import Hobbies from "./components/Hobbies";
import Loading from "./components/Loading";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const API_URL = "http://localhost:9000";
  useEffect(() => {
    console.log("app rendered");
    async function fetchData() {
      try {
        setErr("");
        setLoading(true);
        const res = await fetch(`${API_URL}/users`);
        const json = await res.json();
        console.log(json, "json");
        const { data, err } = json;
        data.split(" ");
        console.log(data, "data");
        if (res.ok) {
          setUsers(data);
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
    if (loading) {
      return <Loading />;
    } else if (err) {
      return err;
    } else {
      return (
        <div>
          <Nav />
          <div className="home">
            <Update />
            <Hobbies users={users} />
          </div>
          <h1>LIVE:</h1>
          <Feed users={users} />
        </div>
      );
    }
  };

  return <div>{renderContent()}</div>;
}

export default App;
