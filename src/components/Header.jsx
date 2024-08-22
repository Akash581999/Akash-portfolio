// import React from "react";
import { useState } from "react";
import "../styles/header.scss";
import "../utils.css";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div id="header" className=" container">
        <nav>
          <div className="menu">
            <Link
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
              offset={-10000}
              duration={500}
              className="linkItems"
            >
              Intro
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="linkItems"
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="linkItems"
            >
              Work
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="linkItems"
            >
              Contacts
            </Link>
            <div className="line"></div>
            <div className="resume">
              <a
                className="btn"
                href="https://drive.google.com/file/d/1wJ7fHuJhVBHnTFIE74yGHrFg3uzRHpKE/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"              >
                Resume
              </a>
            </div>
          </div>
          <div className="bars mobMenu">
            <FaBars onClick={() => setShowMenu(!showMenu)} />
            <div
              className="navMenu"
              style={{ display: showMenu ? "flex" : "none" }}
            >
              <Link
                activeClass="active"
                to="header"
                spy={true}
                smooth={true}
                offset={-10000}
                duration={500}
                className="navLinkItems"
                onClick={() => setShowMenu(false)}
              >
                Intro
              </Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="navLinkItems"
                onClick={() => setShowMenu(false)}
              >
                About
              </Link>
              <Link
                activeClass="active"
                to="work"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="navLinkItems"
                onClick={() => setShowMenu(false)}
              >
                Work
              </Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="navLinkItems"
                onClick={() => setShowMenu(false)}
              >
                Contacts
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
