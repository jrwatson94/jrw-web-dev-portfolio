import React from 'react';
import resume from '../assets/resume.pdf'

const Resume = () => {
    return (
        <div className="container resume-container">
            <h1>Resume</h1>
            <hr></hr>
            <embed src={resume} width="675px" height="863px" />
        </div>
    )
}

export default Resume;