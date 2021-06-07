import React from 'react';

function ProjectsContainer(){
    return(
        <div className="container">
            <h2 className="m-auto">My Work</h2>
            <hr></hr>
            <div className="projects">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <iframe className="demo-video" src={"https://player.vimeo.com/video/501043516"} width="375" height="200" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="col-12 col-md-4">
                        <iframe className="demo-video" src={"https://player.vimeo.com/video/493391077"} width="375" height="200" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="col-12 col-md-4">
                        <iframe className="demo-video" src={"https://player.vimeo.com/video/493390621"} width="375" height="200" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsContainer;