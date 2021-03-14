import React, { Component } from "react";
import { HashRouter as Router, Route,Switch } from 'react-router-dom'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';

// Components
import Nav from "./components/Nav";


// Pages
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
