import React from 'react';
import {NavLink} from "react-router-dom";

function Navigation(props) {   

    return (
    <div className=" row navigation" id="navigation">
        <NavLink
          to="/portfolio"
          className={({isActive}) => isActive ? 'active-link' : ''}
        >
          PORTFOLIO
        </NavLink>
        <NavLink
          to="/about"
          className={({isActive}) => isActive ? 'active-link' : ''}
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/resume"
          className={({isActive}) => isActive ? 'active-link' : ''}
        >
          RESUME
        </NavLink>
        <NavLink
          to="/contact"
          className={({isActive}) => isActive ? 'active-link' : ''}
        >
          CONTACT
        </NavLink>
    </div>
  );
}

export default Navigation;