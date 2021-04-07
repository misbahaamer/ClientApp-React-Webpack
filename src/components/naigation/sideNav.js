import React from "react";
import styles from "./sideBarMenu.css";
import {
  Nav,
  NavItem,
  Navbar,
  NavDropdown,
  MenuItem,
  Glyphicon,
} from "react-bootstrap";

export default class SideNavbar extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid p-0">
          <div className="row" id="body-row">
            <div
              id="sidebar-container"
              className="sidebar-expanded d-none d-md-block"
            >
              <ul className="list-group">
                <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
                  <small>MAIN MENU</small>
                </li>

                <a
                  href="#submenu1"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="bg-dark list-group-item list-group-item-action flex-column align-items-start"
                >
                  <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-dashboard fa-fw mr-3"></span>
                    <span className="menu-collapsed">Dashboard</span>
                    <span className="submenu-icon ml-auto"></span>
                  </div>
                </a>

                <div id="submenu1" className="collapse sidebar-submenu">
                  <a
                    href="#"
                    className="list-group-item list-group-item-action bg-dark text-white"
                  >
                    <span className="menu-collapsed">Charts</span>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action bg-dark text-white"
                  >
                    <span className="menu-collapsed">Reports</span>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action bg-dark text-white"
                  >
                    <span className="menu-collapsed">Tables</span>
                  </a>
                </div>
                <a
                  href="#submenu2"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="bg-dark list-group-item list-group-item-action flex-column align-items-start"
                >
                  <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-user fa-fw mr-3"></span>
                    <span className="menu-collapsed">Profile</span>
                    <span className="submenu-icon ml-auto"></span>
                  </div>
                </a>

                <div id="submenu2" className="collapse sidebar-submenu">
                  <a
                    href="#"
                    className="list-group-item list-group-item-action bg-dark text-white"
                  >
                    <span className="menu-collapsed">Settings</span>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action bg-dark text-white"
                  >
                    <span className="menu-collapsed">Password</span>
                  </a>
                </div>
                <a
                  href="#"
                  className="bg-dark list-group-item list-group-item-action"
                >
                  <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-tasks fa-fw mr-3"></span>
                    <span className="menu-collapsed">Tasks</span>
                  </div>
                </a>

                <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
                  <small>OPTIONS</small>
                </li>

                <a
                  href="#"
                  className="bg-dark list-group-item list-group-item-action"
                >
                  <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-calendar fa-fw mr-3"></span>
                    <span className="menu-collapsed">Calendar</span>
                  </div>
                </a>
                <a
                  href="#"
                  className="bg-dark list-group-item list-group-item-action"
                >
                  <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-envelope-o fa-fw mr-3"></span>
                    <span className="menu-collapsed">
                      Messages{" "}
                      <span className="badge badge-pill badge-primary ml-2">
                        5
                      </span>
                    </span>
                  </div>
                </a>

                <li className="list-group-item sidebar-separator menu-collapsed"></li>

                <a
                  href="#"
                  className="bg-dark list-group-item list-group-item-action"
                >
                  <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-question fa-fw mr-3"></span>
                    <span className="menu-collapsed">Help</span>
                  </div>
                </a>
                <a
                  href="#"
                  data-toggle="sidebar-colapse"
                  className="bg-dark list-group-item list-group-item-action d-flex align-items-center"
                >
                  <div className="d-flex w-100 justify-content-start align-items-center">
                    <span id="collapse-icon" className="fa fa-2x mr-3"></span>
                    <span id="collapse-text" className="menu-collapsed">
                      Collapse
                    </span>
                  </div>
                </a>

                <li className="list-group-item logo-separator d-flex justify-content-center">
                  <img
                    src="https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-solid.svg"
                    width="30"
                    height="30"
                  />
                </li>
              </ul>
            </div>

            <div className="col">
              <h1>
                Collapsing Menu
                <small className="text-muted">Version 2.1</small>
              </h1>

              <div className="card">
                <h4 className="card-header">Requirements</h4>
                <div className="card-body">
                  <ul>
                    <li>JQuery</li>
                    <li>Bootstrap 4 beta-3</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
