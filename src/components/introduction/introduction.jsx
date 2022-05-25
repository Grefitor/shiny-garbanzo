import React from "react";
import ScrollSVG from "../scroll/scroll";
import "./introduction.scss";
import P from '../../img/web_developer.svg';
const Introduction = () => {
  return (
    <div className="i">
      <div className="i--left">
        <div className="i--left-wrapper">
          <h2 className="i--left-intro">Hello, My Name is</h2>
          <h1 className="i--left-name">Vipul Sharma</h1>
          <div className="i--left-title">
            <div className="i--left-title-wrapper">
              <div className="i--left-title-item">Software Engineer</div>
              <div className="i--left-title-item">Web Developer</div>
              <div className="i--left-title-item">Web Explorer</div>
            </div>
          </div>
          <p className="i-desc">
            I design, develop and create stylish, modern websites and web services.
          </p>
        </div>
        <div className="i-scroll">
          <ScrollSVG />
        </div>
      </div>
      <div className="i--right">
          <div className="i--right-bg"></div>
        <img src={P} alt="" className="i--right-img" />
      </div>
    </div>
  );
};

export default Introduction;