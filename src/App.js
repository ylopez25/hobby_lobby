import './App.css';
import Nav from './components/nav';
import Update from './components/Update';
import Feed from './components/Feed';
import Hobbies from './components/Hobbies';

//rename update to info
function App() {
  return (
    <div>
      <Nav/>
      <div class='home'>
      <Update/>
      <Hobbies/>
      </div>
      <Feed/>
    </div>
  );
}

export default App;
