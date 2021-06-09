import React from 'react';
import css from '../assets/logos/css.png';
import postgres from '../assets/logos/postgres.png';
import ruby from '../assets/logos/ruby.png';
import js from '../assets/logos/javascript.png';
import html from '../assets/logos/html-5.png';
import react from '../assets/logos/react.png';
import redux from '../assets/logos/redux.png';
import bootstrap from '../assets/logos/bootstrap.png';
import semantic from '../assets/logos/semantic.png';
import rails from '../assets/logos/rails.png';
import reid from '../assets/reid.jpg'







function About (){
    return(
        <div className="about container">
            <h2 className="m-auto title">About</h2>
            <hr></hr>
            <div>
                <div className="text-center">
                    <img className="reid-img" src={reid}></img>
                </div>
                <p className="about-text">
                    <br></br>
                    My journey as a software developer started at the Flatiron School, a rigorous 15-week software engineering
                    bootcamp where I learned the core foundation of my technical skills. At Flatiron, I specialized in Ruby on Rails, 
                    Javascript, and React.js.
                    <br></br>
                    <br></br>
                    Prior to my bootcamp, I actually worked as a professional actor in New York City. I was the member of a 
                    Shakespeare company in Upper Manhattan, and performed in various venues throughout the city. Although computer 
                    programming and Shakespeare may at first seem like disparate, unrelated experiences, acting has actually taught
                    me so much about being a developer! 
                </p>
            </div>
            <div>
                <div className="lang-container">
                    <br></br>
                    <h3 className="mt-2 pl-5"><u>Languages</u></h3>
                    <div className="row mt-5 justify-content-center text-center">
                        <div className="col-6 col-md-4 col-lg-2"><img className="code-logo" src={ruby}></img></div>
                        <div className="col-6 col-md-4 col-lg-2"><img id="postg" className="code-logo" src={postgres}></img></div>
                        <div className="col-6 col-md-4 col-lg-2"><img className="code-logo" src={js}></img></div>
                        <div className="col-6 col-md-4 col-lg-2"><img className="code-logo" src={html}></img></div>
                        <div className="col-6 col-md-4 col-lg-2"><img className="code-logo" src={css}></img></div>
                    </div>
                    <h3 className="mt-5 pl-5"><u>Frameworks</u></h3>
                    <div className="row mt-5 justify-content-center text-center">
                        <div className="col-6 col-md-4 col-lg-2"><img className="code-logo" src={rails}></img></div>
                        <div className="col-6 col-md-4 col-lg-2"><img className="code-logo" src={react}></img></div>
                        <div className="col-6 col-md-4 col-lg-2"><img className="code-logo" src={redux}></img></div>
                        <div className="col-6 col-md-4 col-lg-2"><img className="code-logo" src={bootstrap}></img></div>
                        <div className="col-6 col-md-4 col-lg-2"><img className="code-logo" src={semantic}></img></div>
                    </div>
                    <div className="row justify-content-center text-center about-links">
                        <div id="ellipses"><h2>.  .  .</h2></div>
                        <div className="col-12">
                            <i className="fab fa-github"></i>
                            <i className="fab fa-linkedin"></i>
                            <i className="fab fa-medium"></i>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
    )
}
export default About;