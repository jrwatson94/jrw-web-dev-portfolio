import React, {useState} from 'react';

function Project(props){
    const [arrowClicked, setArrowClicked] = useState(false);
    const [hover, setHover] = useState(false);

    const clickHandler = () => {
        setArrowClicked(!arrowClicked)
    }

    return(
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="card mb-3">
            <div className="row no-gutters">
                <div className="col-5">
                    <div className="logo-div m-auto">
                        <img src={props.logo} className="card-img"></img>
                    </div>
                </div>
                <div className="col-7 text-center">
                    <h2 className="card-title mt-5 mb-0">{props.name}</h2>
                    {props.intro}
                </div>
                
            </div>
          
            <div className="row">
                <div className="col-12">
                        <div className="collapse" id={props.name}>
                            {props.text}
                            {props.website_link ? 
                                <div className="text-center">
                                    <a href={props.website_link} target="_blank" rel="noreferrer" className="website-link">
                                        <h5>See Live Website</h5>
                                    </a>
                                </div>
                            
                            :
                                <iframe 
                                    className="card-img align-self-center"
                                    byline="0"
                                    src={props.url}
                                    frameborder="0" 
                                    allow="autoplay; fullscreen" 
                                    allowfullscreen>
                                </iframe>
                            }
                        </div>
                </div>
            </div>
            <div className="row">
                <div onClick={() => clickHandler()} className={hover ? " arrow-div col-12 text-center visible" : "arrow-div col-12 text-center"} data-toggle="collapse" data-target={`#${props.name}`}>
                    {arrowClicked ? <i className="fas fa-chevron-up arrow"></i> : <i className="fas fa-chevron-down arrow"></i>}
                </div>
            </div>
        </div>
        
    )
}

export default Project;