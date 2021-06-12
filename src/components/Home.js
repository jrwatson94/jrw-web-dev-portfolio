import React from 'react'
import reidPic from '../assets/reid_toon_pic.PNG'

function Home(){
    return(
        <>
            <div className="home container">
                <h2 className="home-item"><u>Full-Stack Web Developer</u></h2>
                <img id="reid-toon-pic" className="home-item" src={reidPic} href="toon-image-reid"></img>
                <div id="intro-text" className="home-item">
                    <p>Hi there, my name's Reid!</p>
                    <br></br>
                    <p>I'm a software developer with a passion for problem-solving,<br></br>
                    creativity, and sleek, efficient design.</p>
                    <br></br>
                    <p>Come see my work below!</p>
                </div>
            </div>
        </>
    )
}
export default Home;