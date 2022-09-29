import React from 'react';
import {NavLink} from "react-router-dom";

function Navigation(props) {   

    return (
    <div className=" row navigation" id="navigation">
        <NavLink to="/about">ABOUT </NavLink>
        <NavLink to="/portfolio">PORTFOLIO </NavLink>
        <NavLink to="/contact">CONTACT </NavLink>
        <NavLink to="/resume">RESUME</NavLink>
    </div>
  );
}

export default Navigation;