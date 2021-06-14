import React from 'react'
import reidPic from '../assets/reid_toon_pic.PNG'
import reidGlasses from '../assets/reid-toon-sunglasses.png'

function Home(){
    return(
        <>
            <div id="home"className="home container">
                <h2 className="home-item">Full-Stack Web Developer</h2>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img className="home-item reid-toon-pic" src={reidPic} href="toon-image-reid"></img>
                        </div>
                        <div class="flip-card-back">
                            <img className="home-item reid-toon-pic" src={reidGlasses} href="toon-image-reid"></img>
                        </div>
                    </div>
                </div>
                <div id="intro-text" className="home-item">
                    <p>Hi there, my name's Reid!</p>
                    <br></br>
                    <p>I'm a software developer with a passion for problem-solving,
                    finding creative solutions, and implementing sleek, efficient design.</p>
                    <br></br>
                    <p>Come see my work below!</p>
                </div>
            </div>
        </>
    )
}
export default Home;