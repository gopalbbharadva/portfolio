import React from "react";

import "../components/home.css";
import { NavLink } from "react-router-dom";
import profileimage from "../../images/profile.png";
import Footer from "../../Shared/Footer";
import Header from "../../Shared/Header";

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <header>
        <br />
        <br />
        <div class="header">
          <img class="image" src={profileimage} />
          <p class="header-text">
            Hi,I am an <span class="clr">App Developer.</span>
          </p>
        </div>
      </header>

      <section class="container2">
        <div class="container container-og">
          <h2 style={{ textAlign: "center" }}>About Me</h2>
          <p>
            I'm Third Year IT Student at VGEC.Crush on App development with{" "}
            <span class="clr">
              <b><a style={{textDecoration:"none",color:"#34D399"}} href="https://flutter.dev/docs">Flutter</a>.</b>{" "}
            </span>
          </p>
        </div>
      </section>
      <section class="container1">
        <div class="container container-white">
          <h2>Familiar Techs.</h2>
          <p>
            I'm Familiar with Html, CSS3, Java, Flutter, PHP, Git, Web Hosting.
          </p>
        </div>
      </section>
      <section class="container2">
        <div class="container container-og">
          <h2>Projects</h2>
          <p>
            On the basis of familiar techs I made some projects,which are hosted
            online.You can check it.
          </p>
          <NavLink exact to="/projects" class="link1 primary-link" >
            See Projects.
          </NavLink>
        </div>
      </section>
      <section class="container1">
        <div class="container container-white">
          <h2>Blogs</h2>
          <p>
            I'm also writing blogs on IT related topics.So you can check it out.
          </p>
          <NavLink to="/blogs" class="link1 secondary-link" >
            See Blogs.
          </NavLink>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;