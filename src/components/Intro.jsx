// import React from "react";
import "../styles/Intro.scss";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <>
      <div className="hero container">
        <div className="img__container">
          <img className="image" src="/Akash Pic.jpeg" alt="Akash Picture" />
        </div>
        <h2 className="subtitle" style={{color:"white"}}>Hi, I am Akash Kumar</h2>
        <h1 className="title">
          Full-Stack <br />
          WEB DEVELOPER.
        </h1>
        <p className="desc">
          With knowledge in <strong>web development</strong> and <a>design</a>,
          i offer the best projects resulting in quality work.
        </p>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="linkItems hero__btn btn"
        >
          Reach out
        </Link>
      </div>
    </>
  );
};

export default Intro;
