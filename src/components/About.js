import React from 'react';

import reid from '../assets/reid.jpg'







function About (){
    return(
        <div className="container">
            <h2 className="title">About</h2>
            <hr></hr>
            <div>
                <div className="text-center">
                    <div className="reid-img-outline justify-content-center">
                        <img className="reid-img" src={reid}></img>
                    </div>
                </div>
                <p className="about-text">
                    <br></br>
                    My journey as a software developer started at the Flatiron School Software Engineering Bootcamp, 
                    a rigorous 15-week program where I learned the core foundation of my technical skills. 
                    At Flatiron, I specialized in Ruby on Rails, Javascript, and React.js.
                    <br></br>
                    <br></br>
                    Prior to my bootcamp, I actually worked as a professional actor in New York City. I was the member of a 
                    Shakespeare company in Upper Manhattan, and performed in various venues throughout the city. Although computer 
                    programming and Shakespeare may at first seem like disparate, unrelated experiences, acting has actually taught
                    me so much about being a developer! The communication and collaboration skills, and the deep sense of empathy 
                    I learned in the theatre have a great impact on how I concieve of and implement web applications.
                    <br></br>
                    <br></br>
                    I am passionate about coding because it allows me to combine my two passions, creativity and technology.
                </p>
            </div>
            <div>
                

            </div>
        </div>
        
    )
}
export default About;