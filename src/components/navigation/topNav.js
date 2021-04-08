import React, { Component, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import SideNav from "./sideNav";

export default class TopNav extends Component {
  render() {
    return (
      <div>
        <header>
          <GiHamburgerMenu />
        </header>
      </div>
    );
  }
}
