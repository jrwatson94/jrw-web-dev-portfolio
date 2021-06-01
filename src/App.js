import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';

function App(){
    return (
        <div className="main-container">
            <div className="SLIDE_BG">
                <Nav />
                <Home />
            </div>
        </div>
    )
}

export default App;