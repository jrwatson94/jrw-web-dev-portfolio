import React from 'react';

function Nav(props){
    return(
        <nav class={props.scrolled ? "navbar navbar-expand " + "scrolled" : "navbar navbar-expand"}>
            <div class="navbar-nav">
                <li className="nav-link"><a className="nav-a">home</a></li>
                <li className="nav-link"><a className="nav-a" >about</a></li>
                <li className="nav-link"><a className="nav-a" >projects</a></li>
                <li className="nav-link"><a className="nav-a" >resume</a></li>
                <li className="nav-link"><a className="nav-a" >contact</a></li>
            </div>
        </nav>

    )
}

export default Nav;