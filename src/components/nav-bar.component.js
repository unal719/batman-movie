
import React from 'react';
import { NavLink } from 'react-router-dom'



const NavBarComponent = (props) => (
    <div>
        <NavLink to="/" activeStyle={{
            fontWeight: "bold",
            color: "red"
        }}>Home</NavLink>
    </div>
);

export default NavBarComponent;