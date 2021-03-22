import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/Services";
import Products from "./components/Products";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <HomePage/>
          </Route>
          <Route path="/services">
            <Services/>
          </Route>
          <Route path="/products">
            <Products/>
          </Route>
          <Route path="/sign-up">
            <SignUp/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
