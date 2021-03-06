import React from "react";
import { useState } from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Closures from "../Pages/components/Closures";
import Blogs from "../Pages/components/Blogs";
import FlutterBlog from "../Pages/components/flutterBlog";

import Home from "../Pages/components/Home";
import Projects from "../Pages/components/Projects";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import Hoisting from "../Pages/components/Hoisting";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/projects" component={Projects}/>
              <Route exact path="/blogs" component={Blogs}/>
              <Route exact path="/blogs/flutterblogs" component={FlutterBlog}/>
              <Route exact path="/blogs/Closures" component={Closures}/>
              <Route exact path="/blogs/Hoisting" component={Hoisting}/>
              <Redirect to="/" />
            </Switch>
          
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;


