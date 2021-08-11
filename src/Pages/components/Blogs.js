import React from "react";
import { NavLink } from "react-router-dom";

import "./blogs.css";

import Footer from "../../Shared/Footer";
import Header from "../../Shared/Header";

const Blogs = () => {
  return (
    <div>
      {/* <Header /> */}
      <div className="header">
        <p style={{ fontSize: "xx-large", textAlign: "center" }}>
          Read my <span class="clr">Blogs.</span>
        </p>
        <hr className="hr1" />
      </div>
      <ul type="none">
        <li>
          <article className="container container-white">
            <h1 className="container-white">Flutter Blog 1</h1>
            <br />
            <small>December,2020</small>
            <p>
              Flutter is a cross-platform UI toolkit that is designed to allow
              code reuse across operating systems such as iOS and Android, while
              also allowing applications to interface directly with underlying
              platform services.{" "}
            </p>
            <NavLink
              exact
              to="/blogs/flutterblogs"
              className="link1 primary-link"
            >
              Read More
            </NavLink>
            &nbsp;
          </article>
          <br />
          <br />
        </li>
        <li>
          <article class="container container-white">
            <h1 class="container-white">Closures in Js</h1>
            <br />
            <small>December,2020</small>
            <p>Take a look at closures in javascript.</p>
            <NavLink exact to="/blogs/Closures" class="link1 primary-link">
              Read More
            </NavLink>
            &nbsp;
          </article>
          <br />
          <br />
        </li>
        <li>
          <article className="container container-white">
            <h1 className="container-white">Hoisting in Js</h1>
            <br />
            <small>December,2020</small>
            <p>
              Understand one of the important concept of js Hoisting
            </p>
            <NavLink
              exact
              to="/blogs/Hoisting"
              className="link1 primary-link"
            >
              Read More
            </NavLink>
            &nbsp;
          </article>
          <br />
          <br />
        </li>
        {/* <li>
          <article class="container container-white">
            <h1 class="container-og">Flutter Blog 2</h1>
            <br />
            <small>December,2020</small>
            <p>
              Flutter is a cross-platform UI toolkit that is designed to allow
              code reuse across operating systems such as iOS and Android, while
              also allowing applications to interface directly with underlying
              platform services.{" "}
            </p>
            <NavLink exact to="/blogs/flutterblogs" 
            class="link1 primary-link" >
              Read More
            </NavLink>
            &nbsp;
          </article>
          <br />
        </li> */}
      </ul>

      {/* <Footer /> */}
    </div>
  );
};

export default Blogs;
