import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Product from "./components/Product";
import Basket from "./components/Basket";
import "./App.css";
import PageNotFound from "./components/PageNotFound";
import { AppProvider } from "./Basket-Context";
import styled from "styled-components";

function App() {
  const Wrapper = styled.div`
    margin:0
    padding: 4em;
    background: papayawhip;
  `;
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default App;
