import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App(){
    return (
        <div className="main-container">
            <div className="SLIDE_BG">
                <Nav />
                <Home />
                <About />
                <Projects />
                <Resume />
                <Contact />
            </div>
        </div>
    )
}

export default App;