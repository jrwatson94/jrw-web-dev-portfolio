import React from 'react';

function Nav(props){
    return(
        <nav class={props.scrolled ? "navbar navbar-expand " + "scrolled" : "navbar navbar-expand"}>
            <div class="navbar-nav">
                <li className="nav-link"><a onClick={() => props.clickHandler(props.home)} className="nav-a">home</a></li>
                <li className="nav-link"><a onClick={() => props.clickHandler(props.about)}className="nav-a" >about</a></li>
                <li className="nav-link"><a onClick={() => props.clickHandler(props.projects)}className="nav-a" >projects</a></li>
                <li className="nav-link"><a onClick={() => props.clickHandler(props.resume)}className="nav-a" >resume</a></li>
                <li className="nav-link"><a onClick={() => props.clickHandler(props.contact)}className="nav-a" >contact</a></li>
            </div>
        </nav>

    )
}

export default Nav;