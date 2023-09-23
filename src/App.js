import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/navbar";
import Home from "./component/home/home";
import About from "./component/about/about";
import NoteState from "./context/notes/noteContext";
import Login from "./component/loginAndSignup/login";
import Signup from "./component/loginAndSignup/signup";
// import AlertComponent from "./component/alert/AlertComponent";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <AlertComponent message="Hello" /> */}
      <NoteState>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </NoteState>
    </Router>
  );
}

export default App;
