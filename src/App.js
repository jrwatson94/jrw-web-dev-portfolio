import React, {useState,useRef} from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills'
import ProjectsContainer from './containers/ProjectsContainer';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App(){
    const [scrolled, setScrolled] = useState(false);
    const navRef = useRef(null);
    
    const home = useRef(null);
    const about = useRef(null);
    const skills = useRef(null);
    const projects = useRef(null);
    const resume = useRef(null);
    const contact = useRef(null);


    const scrollHandler = () => {
        const scrollTop = navRef.current.scrollTop;
        if(scrollTop < 10){
            setScrolled(false);
        }else{
            setScrolled(true);
        }
    }

    const clickHandler = (ref) => {
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }


    return (
        <div className="main-container">
            <div className="SLIDE_BG">
                <Nav scrolled={scrolled} 
                    clickHandler={clickHandler} 
                    home={home}
                    about={about}
                    projects={projects}
                    resume={resume}
                    contact={contact}
                />
                
                <div 
                    className="components-container"
                    ref={navRef}
                    onScroll={scrollHandler}
                >
                    <div className="name-banner">
                        <h1 id="name-tag" className="home-item">REID WATSON</h1>
                        <hr className="name-hr"></hr>
                    </div>
                    <div className="components-sub-container">
                        <div ref={home}><Home /></div>
                        <div ref={about}><About /></div>
                        <div ref={skills}><Skills /></div>
                        <div ref={projects}>< ProjectsContainer/></div>
                        {/* <div ref={resume}><Resume /></div> */}
                        <div ref={contact}><Contact /></div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default App;