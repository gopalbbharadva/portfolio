import React from "react";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-header">Connect with me</div>
        <ul className="social-links">
          <li className="list-item">
            <a className="link" href="https://github.com/gopalbbharadva">
              <i className="icon">
                <FaGithub />
              </i>
            </a>
          </li>
          <li className="list-item">
            <a
              className="link"
              href="https://www.linkedin.com/in/gopal-bharadva-1aa880176/">
              <i className="icon">
                <FaLinkedin />
              </i>
            </a>
          </li>
          <li className="list-item">
            <a className="link" href="https://www.instagram.com/gopal_33_gb/">
              <i className="icon">
                <FaInstagram />
              </i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
