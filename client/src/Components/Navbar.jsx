import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {ArrowDropDown, Menu} from '@mui/icons-material';
import "./Navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
      <div className="container">
        <div className="logo">
          "Brand"
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Menu />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/careers">Careers</NavLink>
            </li>
            <li class="dropdown">
              <NavLink class="dropbtn">Services
                <ArrowDropDown />
              </NavLink>
              <div class="dropdown-content">
                <NavLink to="#">Income Tax</NavLink>
                <NavLink to="#">GST Act</NavLink>
                <NavLink to="#">Charitable Trust</NavLink>
                <NavLink to="#">Companies Act</NavLink>
                <NavLink to="#">Accounting Services</NavLink>
                <NavLink to="#">Audit</NavLink>
              </div>
            </li> 
            <li class="dropdown">
              <NavLink class="dropbtn">About
                <ArrowDropDown />
              </NavLink>
              <div class="dropdown-content">
                <NavLink to="#">About the firm</NavLink>
                <NavLink to="#">Core Values</NavLink>
                <NavLink to="#">Our Team</NavLink>
              </div>
            </li> 
            <li>
              <NavLink to="/news">News</NavLink>
            </li>
            <li>
              <NavLink to="/query">Query</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

export default NavBar;