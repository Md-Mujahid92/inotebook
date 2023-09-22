import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/navbar";
import Home from "./component/home/home";
import About from "./component/about/about";
import NoteState from "./context/notes/noteContext";
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
        </Routes>
      </NoteState>
    </Router>
  );
}

export default App;
