import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Create from "./Pages/Create";
import Edit from './Pages/EditProfile';
import Profile from "./Pages/Profile";
import Focus from "./Pages/Focus";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import FourOFour from "./Pages/FourOFour";

//Components
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Index />} />
            <Route path="/create" element={<Create />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/1/editprofile" element={<Edit/>}/>
            <Route path="/focus" element={<Focus/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="*" element={<FourOFour/>}/>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
