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
import github from '../assets/logos/github.png';
import medium from '../assets/logos/medium.png';
import linkedin from '../assets/logos/linkedin.png';







function About (){
    return(
        <div className="about container">
            <h2 className="m-auto">About</h2>
            <hr></hr>
            <div>
                <p className="about-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec mollis est. 
                    Etiam hendrerit elit elementum, dictum nisl at, euismod nisl. Sed ac malesuada magna, et fermentum nibh. 
                    Curabitur quis convallis est. Curabitur lacus purus, ultrices eget placerat sed, molestie eget purus. 
                    Pellentesque malesuada mauris egestas ullamcorper fermentum. In hac habitasse platea.
                </p>
            </div>
            <div>
                <h4 className="align-self-center"><u>Skills</u></h4>
                <div className="lang-container">
                    <br></br>
                    <h4><u>Languages</u></h4>
                    <div className="row justify-content-center text-center">
                        <div className="col-6 col-md-4 col-lg-2"><img className="code-logo" src={ruby}></img></div>
                        <div className="col-6 col-md-4 col-lg-2"><img id="postg" className="code-logo" src={postgres}></img></div>
                        <div className="col-6 col-md-4 col-lg-2"><img className="code-logo" src={js}></img></div>
                        <div className="col-6 col-md-4 col-lg-2"><img className="code-logo" src={html}></img></div>
                        <div className="col-6 col-md-4 col-lg-2"><img className="code-logo" src={css}></img></div>
                    </div>
                    <h4><u>Frameworks</u></h4>
                    <div className="row justify-content-center text-center">
                        <div className="col-6 col-md-4 col-lg-2"><img className="code-logo" src={rails}></img></div>
                        <div className="col-6 col-md-4 col-lg-2"><img className="code-logo" src={react}></img></div>
                        <div className="col-6 col-md-4 col-lg-2"><img className="code-logo" src={redux}></img></div>
                        <div className="col-6 col-md-4 col-lg-2"><img className="code-logo" src={bootstrap}></img></div>
                        <div className="col-6 col-md-4 col-lg-2"><img className="code-logo" src={semantic}></img></div>
                    </div>
                    <div className="row justify-content-center text-center about-links">
                        <div className="col-12 col-md-4"><i className="fab fa-github"></i></div>
                        <div className="col-12 col-md-4"><i className="fab fa-linkedin"></i></div>
                        <div className="col-12 col-md-4"><i className="fab fa-medium"></i></div>
                    </div>
                </div>

            </div>
            <p className="about-text">
                Morbi ac diam nec elit consectetur mollis. Integer ullamcorper a augue eu fermentum. 
                Aenean eget fermentum odio, vel accumsan arcu. Vestibulum sed dui at diam porttitor tristique. 
                Vestibulum aliquet et purus sit amet pretium. Aliquam suscipit odio iaculis, sagittis ante aliquet, rutrum nisi. 
                Donec purus lacus, interdum eu ante at, rutrum consequat metus. In sed imperdiet ipsum. 
                In hac habitasse platea dictumst. In accumsan sagittis massa id tincidunt. 
                In hac habitasse platea dictumst. In magna nibh, tincidunt eu convallis eu, feugiat vitae mauris. 
                Aliquam non quam tempus nisl malesuada tristique vitae nec est. Fusce hendrerit suscipit ante eu viverra. 
                In auctor sodales neque, quis efficitur nibh feugiat at. Fusce feugiat lorem ac sagittis tristique. 
                Sed a rutrum lacus. Proin ultrices magna purus, eu congue nisi auctor id. Aenean in lectus ac orci tempor fringilla ut non urna. 
                Donec urna libero, vestibulum sed enim et, commodo hendrerit eros. Morbi laoreet nisl dignissim, ornare nisl in, aliquam diam. 
                Nunc finibus volutpat diam et tempor.
            </p>
        </div>
        
    )
}
export default About;