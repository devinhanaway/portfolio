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
          <h1 className="col-md-12">My Values</h1>
        <ul className="text-primary">I live to learn and grow with each day, experience, and perspective. Happiness, Success, and Life is simply a choice. That choice is one we must continue to look at each day.</ul>
        </div>
        <div className="container aboutDiv">
          <h1 className="col-md-12">My Mission</h1>
        <ul className="text-primary">My mission is to understand the many perspectives of the world in order to create meaningful change through technology, design, and relationships.</ul>

    <ul className="text-primary">I hope to apply what I have learned about human-centered design, with my background in Technology, Medicine, and Enterpeneurship to solve some of the many pressing problems our world faces. </ul>
        </div>

        <div className="container aboutDiv">

          <h1 className="col-md-12">My Story</h1>
        <ul className="text-primary">My life has been a journey driven by experiences; seeking to learn and engage with the world around me.I have worked in 3 different countries, visited over 30 and driven from the Atlantic to Pacific Ocean and back. I seek experiences and perspective so that I can better understand myself and all other human alike.</ul>

      <ul className="text-primary">I attended UNC Chapel Hill for Undergraduate, studying business with a focus in entrepreneurship, technology and healthcare. After a freshman year of pre-med courses and Business pre-requisites, I spent the summer as a project manager working for a entrepreneur who ran a health clinic/software company out of Copenhagen. During this time I also started my first software company, Inverge, which I built out over the course of my sophomore year of college.</ul>

    <ul className="text-primary">
      I realized the vital role of design and technology in healthcare, as well as many other businesses. I discovered that my impact would be through my ability to translate ideas, manage relationships, and communicate across different domains. There was no design major at UNC, but design thinking had become the mission of Judith Cone, the Vice Chancellor for Innovation. I decided that I would use the courses available and the entrepreneurial opportunities to gain the skills and experience in business, design and technology.
    </ul>

    <ul className="text-primary">The following summer I received an Innovation Fellowship to immerse myself in the Silicon Valley Startup Community. I worked for Galvanize as an Intern and connecting with many Bay Area thought leaders and companies. My time at Galvanize, and in the Bay Area, along with my developing understanding of building software and managing engineers, made me realize that in order to bring about the change I want to create, that I needed to more deeply learn software engineering.
    </ul>
    <ul className="text-primary">I came back to UNC after my sophomore year, and decided that rather than switching my major to Computer Science, that I would take 50 hours my senior year, graduate a year early and use the last year of my college fund for a Full Stack Web Development Immersive.

    The following July, I found myself submitting my final paper in college from the barracks of an overnight train through Croatia. I had to take 9 hours over the summer to pull off the 50 hours, but managed to find a way to complete this while vagabonding and doing a work-trade on a sailboat throughout Europe.

    After returning to the states in the Fall of 2016, applied to and got accepted to the Galvanize Full Stack Web Development Immersive in Denver, Colorado. I moved out to Denver, in December, and on Feb, 14th, I started the 6 month journey to learning how to be a software developer, and to be a more effective Product Manager, and Entrepreneur.

    </ul>
        </div>
      </div>
    )
  }
}
