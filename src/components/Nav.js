import React from 'react';
import {Link} from 'react-scroll';

function Nav(){
    return(
        <ul class="nav navbar justify-content-center">
            <li class="nav-item">
                <Link><a class="nav-link">Home</a></Link>
            </li>
            <li class="nav-item">
                <a class="nav-link">Projects</a>
            </li>
            <li class="nav-item">
                <a class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link">Resumé</a>
            </li>
        </ul>
    )
}

export default Nav;