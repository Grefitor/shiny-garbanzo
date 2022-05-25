import React, { useContext } from "react";

import "./Toggle.scss";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { ThemeContext } from "../../context/ThemeContext";
const Toggle = () => {
    const theme = useContext(ThemeContext)
    const handleClick = () => {
        theme.dispatch({type: "TOGGLE"})
    }
    return (
    <div onClick={handleClick} className={`t${theme.state.darkMode ? ' dark':' light'}`}>
      <img className="t-icon" src={Sun} alt=""/>
      <img className="t-icon" src={Moon} alt=""/>
      <div className="t-btn" ></div>
    </div> 
  );
};

export default Toggle;
