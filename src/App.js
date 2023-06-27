import './App.css';
import Nav from './components/nav';
import Update from './components/Update';
import Feed from './components/Feed';

//rename update to info
function App() {
  return (
    <div>
      <Nav/>
      <Update/>
      <Feed/>
    </div>
  );
}

export default App;
