import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Product from "./components/Product";
import Basket from "./components/Basket";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Product path="/" exact />
          <Basket path="/basket" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
