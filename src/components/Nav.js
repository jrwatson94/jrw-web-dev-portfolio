import React from 'react';
import {NavLink} from 'react-router-dom'

function Nav(){
    return(
        <nav class="nav navbar justify-content-center">
            <NavLink to="/home"><h5 className="nav-link" >home</h5></NavLink>
            <NavLink to="/about"><h5 className="nav-link">about</h5></NavLink>
            <NavLink to="/projects"><h5 className="nav-link">projects</h5></NavLink>
            <NavLink to="/resume"><h5 className="nav-link">resume</h5></NavLink>
            <NavLink to="/contact"><h5 className="nav-link">contact</h5></NavLink>
        </nav>
    )
}

export default Nav;