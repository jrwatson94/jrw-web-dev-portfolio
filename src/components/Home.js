import React from 'react'
import reidPic from '../assets/reid_toon_pic.PNG'

function Home(){
    return(
        <div>
            <h1 id="name-tag" className="home-item">REID WATSON</h1>
            <hr className="name-hr"></hr>
            <div className="home container">
                <img id="reid-toon-pic" className="home-item" src={reidPic} href="toon-image-reid"></img>
                <h3 className="home-item"><u>Full-Stack Web Developer</u></h3>
                <div id="intro-text" className="home-item">
                    <p>Welcome to my portfolio!</p>
                    <p>I am a software developer with a passion for problem-solving,<br></br>
                    creativity, and sleek, efficient design.</p>
                    <p>Come see my work below!</p>
                </div>
            </div>
        </div>
    )
}
export default Home;