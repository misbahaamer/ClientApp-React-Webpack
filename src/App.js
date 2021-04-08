import React, { Component, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import Myaccount from "./components/myaccount";
import Navbar from "./components/navigation/Navbar";
import SideNav from "./components/navigation/sideNav";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
        </div>
      </Router>
    );
  }
}

export default App;
