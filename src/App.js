import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import Myaccount from "./components/myaccount";
import TopNavbar from "./components/naigation/topnav";
import SideNavbar from "./components/naigation/sideNav";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopNavbar />
          <SideNavbar />

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/myAccount" component={Myaccount} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
