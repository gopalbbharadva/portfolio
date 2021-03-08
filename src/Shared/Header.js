import React from "react";
import Blogs from "../Pages/components/Blogs";
import { NavLink } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <div>
      <nav class="navbar">
        <div class="navbar-brand">Gopal Bharadva</div>
        <ul class="unordered-list" type="none">
          <li>
            <NavLink exact to="/" id="home" className="nav-item" 
            activeClassName="currentNav">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink  exact to="/projects" id="projects" className="nav-item" 
            activeClassName="currentNav">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/blogs" id="blogs" className="nav-item" 
            activeClassName="currentNav">
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
