import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/nav";
// import Update from "./components/update";
import Feed from "./components/Feed";
import Hobbies from "./components/Hobbies";
import Loading from "./components/Loading";
import Error from "./components/Error";

function App() {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  // const [activeHobby, setActiveHobby] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL;
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
        console.log(data, "data");
        if (res.ok) {
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

  const menuItems = [...new Set(allUsers.map((el) => el.skill))];

  //filter items
  const filterUsers = (cat) => {
    const filteredUsers = allUsers.filter((val) => val.skill === cat);
    setUsers(filteredUsers);
    // setActiveHobby(cat);
  };

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else if (err) {
      return <Error err={err} />;
    } else {
      return (
        <div className="app">
          <Nav />
          <div className="home">
            {/* <Update /> */}
            <Hobbies menuItems={menuItems} filterUsers={filterUsers} resetUsers={() => setUsers(allUsers)} />
          </div>
          <Feed users={users} />
        </div>
      );
    }
  };

  return <div>{renderContent()}</div>;
}

export default App;
