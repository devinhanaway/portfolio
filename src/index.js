import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Projects from './components/Projects'
import About from './components/About'
import Landing from './components/Landing'
import Timeline from './components/Timeline'
import Inverge from './components/Inverge'


import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'



ReactDOM.render(
  <Router>
    <div>
    <Route exact path='/' component={App}/>
    <Route path='/inverge' component={Inverge}/>



    </div>
  </Router>,
  document.getElementById('root'));
