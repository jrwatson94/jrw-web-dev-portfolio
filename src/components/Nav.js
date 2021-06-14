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
                <li className="nav-link"><a onClick={() => props.clickHandler(props.skills)}className="nav-a" >skills</a></li>
                <li className="nav-link"><a onClick={() => props.clickHandler(props.projects)}className="nav-a" >projects</a></li>
                <li className="nav-link mr-auto"><a onClick={() => props.clickHandler(props.contact)}className="nav-a" >contact</a></li>
                <li className="">
                    <a target="_blank" href="https://github.com/jrwatson94"><i title="Github" className="fab fa-github"></i></a>
                </li>
                <li className="">
                    <a target="_blank" href="https://www.linkedin.com/in/reid-watson-dev/"><i title="LinkedIn" className="fab fa-linkedin"></i></a>
                </li>
                <li className="">
                    <a target="_blank" href="https://j-watsonreid.medium.com"><i title="blog" className="fab fa-medium"></i></a>
                </li>
                <li className="">
                    <a target="_blank" href="https://docs.google.com/document/d/1bWWyEu1G9QEBvf1h4QIZuKTMqN2oDtKa5SzmlyclmAk/edit?usp=sharing"><i title="resume" className="fab fa-google-drive"></i></a>
                </li>
            </div>
        </nav>

    )
}

export default Nav;