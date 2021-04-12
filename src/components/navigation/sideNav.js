import React, { Component, useState } from "react";

const Navbar = ({ show }) => {
  return (
    <div className={show == true ? "sidenav active" : "sidenav"}>
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
};

export default Navbar;
