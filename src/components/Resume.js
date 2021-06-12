import React from 'react';
import { Document } from 'react-pdf';
import resume from '../assets/resume.pdf'

const Resume = () => {
    return (
        <div className="container resume-container">
            <h2 className="title">Resumé</h2>
            <hr></hr>
            {/* <Document file={resume}></Document> */}
            {/* <embed src={resume} type="application/pdf" width="675px" height="863px" /> */}
            <iframe
                id="resume" 
                src="https://docs.google.com/document/d/e/2PACX-1vToB68HOiEIASkuZtN822fahLviVtkUIRiCBuciCMUpY5xqcIpan06NQ9Ekx0xtXCZH0w_1RnFy5nX2/pub?embedded=true"
                frameborder="0" 
            >

            </iframe>
        </div>
    )
}

export default Resume;