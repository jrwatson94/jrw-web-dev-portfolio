import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home'

function App(){
    return (
        <div className="main-container">
            <Nav />
            <Home />
        </div>
    )
}

export default App;