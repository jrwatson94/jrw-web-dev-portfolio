import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import ProjectsContainer from './containers/ProjectsContainer';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer'
import { BrowserRouter as Router, Route , Switch, withRouter} from 'react-router-dom';


function App(){
    return (
        <div className="main-container">
            <div className="SLIDE_BG">
                <Nav />
                <Home />
                <Route exact path="/" render={() => <About />}/>
                <Route exact path="/about" render={() => <About />}/>
                <Route exact path="/projects" render={() => <ProjectsContainer />}/>
                <Route exact path="/resume" render={() => <Resume />}/>
                <Route exact path="/contact" render={() => <Contact />}/>
                <Footer />
            </div>
        </div>
    )
}

export default App;