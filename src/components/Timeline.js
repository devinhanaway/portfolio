import React, { Component } from 'react';
import '../App.css';



export default class Timeline extends Component{

  render(){
    return(
      <div className="Timeline">
        <div className="container ">
          <h1 className="header">My Journey</h1>
        <p className="header">Since Graduating UNC</p>
        </div>
          <section id="cd-timeline" class="cd-container">
            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-picture">
              </div>

              <div className="cd-timeline-content">
                <h2>Dev Consulting</h2>
              <div className="timeline-content-info">
                  <span className="timeline-content-info-title">
                    <i className="fa fa-certificate" aria-hidden="true"></i>
                  Product Manager | Software Developer | Entrepreneurial Consulting
                  </span>
                  <span className="timeline-content-info-date">
                    <i className="fa fa-calendar-o" aria-hidden="true"></i>
                  </span>
                </div>
                <p>Working as an entrepreneurial consultant, and software developer, as I finish up a 6 month Full Stack Software Development Immersive. I am looking to transition into a product management role within a startup that values agile and user driven software development.</p>
              <ul className="content-skills">
                <li>HTML5 | CSS3 | JavaScript | Python </li>
                <li>REACT.JS | Angular.JS | Node.JS </li>
              <li>Heroku | Firebasee | Git | Github </li>
                <li>Agile | SCRUM | Pivatol Tracker | Asana  </li>
              <li>Adobe Creative Cloud | ERD's | </li>
                </ul>
                      <span className="cd-date">TODAY</span>
              </div>
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-movie">
              </div>

              <div className="cd-timeline-content">
                <h2>Galvanize | Denver | Web Development Immersive |  2017</h2>
                <p>
          Intensive web development program with a focus on JavaScript.Trained on front end & back end technologies to build applications individually & in group formats, with an emphasi on Agile workflow, & pair programming</p>
              <span className="cd-date">Feb 14th, 2017</span>
              </div>
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-picture">
              </div>

              <div className="cd-timeline-content">
                <h2>Costner Lake (Jooster) | Remote | Entrepreneurial/Research Consultant </h2>
                <p>
          Jan 2017- Present
          •	Worked with President to identify key tech & projects to pursue
          •	Implemented projects including detailed medical journal reports </p>
              <span className="cd-date">Jan 20, 2017</span>
              </div>
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-location">
              </div>

              <div className="cd-timeline-content">
                <h2>Work-Trade Sailing through the mediterranean</h2>
              <p>Took online classes to finished up college, while doing my best vagabond impersonation. Staying with friends, and kind family's throughout Eastern Europe, Scandanavia, Spain and Morrocco. Ultimatley culminating the trip in a work trade on a sail boat, learning to sail, as we traveled from Nice to Rome for a month</p>
              <span className="cd-date">May - Sept, 2016</span>
              </div>
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-location">
              </div>

              <div className="cd-timeline-content">
                <h2>Graduated from UNC Chapel Hill</h2>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p> */}
              <span className="cd-date">Aug, 2013 - Aug, 2016</span>
              </div>
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-movie">
              </div>

              {/* <div className="cd-timeline-content">
                <h2>Final Section</h2>
                <p>This is the content of the last section</p>
              <span className="cd-date">Feb 26</span>
              </div> */}
            </div>
          </section>

      </div>
    )
  }
}
