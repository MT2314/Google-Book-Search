import React, { Component } from "react";
import { HashRouter as Router, Route } from 'react-router-dom'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';

import Nav from "./components/Nav";
import { __RouterContext } from "react-router";

// Pages
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Route exact path="/" component={Search} />
        <Route path="/saved" component={Saved} />
      </Router>
    </div>
  );
}


export default App;
