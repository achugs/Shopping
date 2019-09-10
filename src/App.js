import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Product from "./components/Product";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Product path="/" exact />
      </Router>
    </div>
  );
}

export default App;
