import React, {useState, useEffect} from 'react';

function Nav(props){
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
        setPageLoaded(true);
    })


    return(
        <nav className=
        {
            (props.scrolled ? "navbar navbar-expand " + "scrolled" : "navbar navbar-expand ") 
            +
            (pageLoaded ? "" : "fade-out")
        }>
            <div className="navbar-nav">
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