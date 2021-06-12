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
import SkillItem  from './SkillItem';

function Skills(){
    return(
        <div className="container">
            <h2 className="title">Technical Skills</h2>
            <hr></hr>
            <div className="lang-container">
                    <br></br>
                    <h3 className="mt-2 pl-5"><u>Languages</u></h3>
                    <div className="row mt-5 justify-content-center text-center">
                        <SkillItem src={ruby} title="Ruby"/>
                        <SkillItem src={postgres} title="Postgres"/>
                        <SkillItem src={js} title="Javascript"/>
                        <SkillItem src={html} title="HTML5"/>
                        <SkillItem src={css} title="CSS3"/>
                    </div>
                    <h3 className="mt-5 pl-5"><u>Frameworks</u></h3>
                    <div className="row mt-5 justify-content-center text-center">
                        <SkillItem src={rails} title="Rails" />
                        <SkillItem src={react} title="React.js"/>
                        <SkillItem src={redux} title="Redux"/>
                        <SkillItem src={bootstrap} title="Bootstrap"/>
                        <SkillItem src={semantic} title="Semantic UI"/>
                    </div>
                    
                </div>
        </div>
    )
}

export default Skills;