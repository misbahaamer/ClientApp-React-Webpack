import React, { Component, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import SideNav from "./sideNav";

export default class Navbar extends Component {
  state = {
    open: false,
  };

  toggleSideNav = () => {
    this.setState((state) => {
      return {
        open: !state.open,
      };
    });
  };

  render() {
    return (
      <div>
        <header>
          <GiHamburgerMenu onClick={this.toggleSideNav} />
        </header>
        <SideNav show={this.state.open} />
      </div>
    );
  }
}
