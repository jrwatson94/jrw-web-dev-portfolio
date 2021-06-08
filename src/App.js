import React, {useState,useRef} from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import ProjectsContainer from './containers/ProjectsContainer';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App(){
    const [scrolled, setScrolled] = useState(false);
    const navRef = useRef(null);

    const scrollHandler = () => {
        const scrollTop = navRef.current.scrollTop;
        if(scrollTop < 60){
            setScrolled(false);
        }else{
            setScrolled(true);
        }
    }

    return (
        <div className="main-container">
            <div className="SLIDE_BG">
                <Nav scrolled={scrolled}/>
                <div 
                    className="components-container"
                    ref={navRef}
                    onScroll={scrollHandler}
                >
                    <Home />
                    <About />
                    <ProjectsContainer />
                    <Resume />
                    <Contact />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default App;