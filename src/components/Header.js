import React, { Component } from 'react';
import '../App.css';
import {

  Link
} from 'react-router-dom'

export default class Header extends Component{
  render(){
    return(
      <div>
        <div className="page-header">
          <h1>Devin Hanaway <soft>Product Manager | Software Developer | Entrepreneur</soft></h1>
        </div>

          <div className="row">
            <a className="col-md-4"><Link to="/">Home</Link></a>
            <a className="col-md-4"><Link to="/about">About</Link></a>
            <a className="col-md-4"><Link to="/projects">Projects</Link></a>
          </div>
      </div>
    )
  }
}
