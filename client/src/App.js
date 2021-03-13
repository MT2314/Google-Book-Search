import React, { Component } from "react";
import { HashRouter as Router, Route } from 'react-router-dom'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import { __RouterContext } from "react-router";

// Components
import Nav from "./components/Nav";
import GoogleBooksSearch from "./components/GoogleBooksSearch";  


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
        <GoogleBooksSearch></GoogleBooksSearch> 
      </Router>
    </div>
  );
}


export default App;
