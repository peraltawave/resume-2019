import React, { Component } from 'react';

import NavBar from  './components/NavBar/NavBar'
import Main from './components/Main/Main'
import Skills from './components/Skills/Skills'
import Portfolio from './components/Portfolio/Portfolio'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Main />
        <Skills />
        <Experience />
        <Portfolio />
        <Education />
        <Contact />
      </div>
    );
  }
}

export default App;
