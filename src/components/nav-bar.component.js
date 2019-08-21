
import React from 'react';
import { NavLink } from 'react-router-dom'



const NavBarComponent = (props) => (
    <div>
        <NavLink to="/" className="nav-bar"
        >Home</NavLink>
    </div>
);

export default NavBarComponent;