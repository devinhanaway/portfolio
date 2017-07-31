import React, { Component } from 'react';
import './App.css';
// import Header from './components/Header'
import Landing from './components/Landing'
import About from './components/About'
import Projects from './components/Projects'
import Timeline from './components/Timeline'


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="personalIcons">
          <div className="icon">
            <a href="./resume_devin_hanaway.pdf"
             target="_blank"
            // download="./resume_devin_hanaway.pdf"
             ><img src="./resume.png"/></a>
          </div>
          <div className="icon">
            <a href="mailto:devinh11@gmail.com"><img src="./email.png"/></a>
          </div>
          <div className="icon">
            <a href="https://github.com/devinhanaway/"><img src="./git.png"/></a>
          </div>
          <div className="icon">
            <a href="https://www.linkedin.com/in/devinhanaway/"><img src="./linkedin.png"/></a>
          </div>
        </div>
        <Landing />
        <About />
        <Timeline />
        <Projects />
      <div className="nav-bar"></div>
        <div class="navbar-header">
          <span>Devin Hanaway   | All License Reserved</span>
        <span></span>
        </div>
      </div>
    );
  }
}

export default App;
