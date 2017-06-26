import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Projects from './components/Projects'
import About from './components/About'

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Route path='/' component={App}/>
      <Route path='/projects' component={Projects}/>
      <Route path='/about' component={About}/>
    </div>
  </Router>,
  document.getElementById('root'));
