import React, { useState } from 'react';

function SkillItem(props){
    const [hover, setHover] = useState(false);
    return(
        <div className= "col-6 col-md-4 col-lg-2">
            <div 
                onMouseEnter={() => setHover(true)} 
                onMouseLeave={() => setHover(false)}
                className="code-logo"
                style={{backgroundImage:`url(${props.src})`}} 
            >
                {hover ? 
                    <div className="code-overlay">
                        <p className="overlay-text pt-4">{props.title}</p> 
                    </div>
                    :
                    ""
                }
            </div>
        </div>
    )
}

export default SkillItem;