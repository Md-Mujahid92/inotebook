import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/navbar";
import Home from "./component/home/home";
import About from "./component/about/about";
import NoteState from "./context/notes/noteContext";
import Login from "./component/loginAndSignup/login";
import Signup from "./component/loginAndSignup/signup";
import AlertComponent from "./component/alert/AlertComponent";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <Router>
      <Navbar />
      <AlertComponent alert={alert} />
      <NoteState>
        <Routes>
          <Route exact path="/" element={<Home showAlert={showAlert} />} />
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/login"
            element={<Login showAlert={showAlert} />}
          />
          <Route
            exact
            path="/signup"
            element={<Signup showAlert={showAlert} />}
          />
        </Routes>
      </NoteState>
    </Router>
  );
}

export default App;
