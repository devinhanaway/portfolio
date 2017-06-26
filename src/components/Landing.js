import React, { Component } from 'react';
import '../App.css';


export default class Landing extends Component{
  render(){
    console.log(this.props.title);
    return(
      <div className="landing">
        <h1 className="landing-title">{this.props.title}</h1>
      <img className="img-responsive landing-title arrow" src={"./arrow.png"} alt="Hello"/>

  
      </div>
    )
  }
}
