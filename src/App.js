import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
