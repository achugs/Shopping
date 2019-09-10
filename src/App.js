import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Product from "./components/Product";
import Basket from "./components/Basket";
import PageNotFound from "./components/PageNotFound";
import { AppProvider } from "./Basket-Context";
import "./App.css";

function App() {
  return (
    <AppProvider>
      <Router>
        <NavBar />
        <Switch>
          <Product path="/" exact component={Product} />
          <Basket path="/basket" component={Basket} />
          <PageNotFound />
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
