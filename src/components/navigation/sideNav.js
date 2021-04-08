import React, { Component, useState } from "react";

export default class SideNav extends Component {
  render() {
    return (
      <div className="sidenav active">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}
