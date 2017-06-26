import React, { Component } from 'react';
import '../App.css';



export default class About extends Component{
  render(){
    return(
      <div>
        <div className="container ">
          <h1 className="header">About Me</h1>
        </div>
        <div className="container center">
            <img className="img-responsive" src={"./home_profile_pic_circle.png"} alt="Hello"/>
        </div>
        <div className="container aboutDiv">
          <h1 className="col-md-12">My Story</h1>
        <p>My passion is in understanding the many perspectivesof the world to create meaningful change through technology, resources, and relationships.</p>

        <p>My background in international business and travel drives my interest and understanding for the importance of having a global view as we create change.</p>

        <p>I have experience working in Technology, Healthcare, and Innovative Ecosystems. I hope to apply what I have learned about human-centered design, with my background in Technology, Medicine, and Enterpeneurship to solve some of the many pressing problems our world faces. </p>
        </div>
        <div className="container aboutDiv">
          <h1 className="col-md-12">My Mission</h1>
        <p>I live to learn and grow with each day, experience, and perspective. Happiness, Success, and Life is simply a choice, and that choice is one we must continue to look at each day.</p>
        </div>
      </div>
    )
  }
}
