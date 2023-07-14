import { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/nav';
import Update from './components/Update';
import Feed from './components/Feed';
import Hobbies from './components/Hobbies';


//rename update to info
function App() {
  const [users, setUsers] = useState([]);

  const API_URL = 'http://localhost:9000'
  useEffect(() => {
    console.log('app rendered')
    async function fetchData() {
      const res = await fetch(`${API_URL}/users`);
      const json = await res.json();
      console.log(json, 'json')
      const {data} = json;
      console.log(data, 'data')
      setUsers(data);
    }
    fetchData()
  }, [])

  //use users to map through data 
  return (
    <div>
      <Nav/>
      <div className='home'>
      <Update/>
      <Hobbies users={users}/>
      </div>
      <Feed users={users}/>
    </div>
  );
}

export default App;
