import React from 'react';
import {NavLink} from 'react-router-dom'

function Nav(){
    return(
        <ul class="nav navbar justify-content-center">
            <NavLink to="/"><h5 className="nav-link">about</h5></NavLink>
            <NavLink to="/projects"><h5 className="nav-link">projects</h5></NavLink>
            <NavLink to="/resume"><h5 className="nav-link">resume</h5></NavLink>
            <NavLink to="/contact"><h5 className="nav-link">contact</h5></NavLink>
        </ul>
    )
}

export default Nav;