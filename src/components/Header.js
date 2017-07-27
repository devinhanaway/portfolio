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
          <div className="imageBox">
            <img className="img-responsive imgProject" src={"./Inverge_circle.png"} alt="Hello"/>
            <span className="text-content">
              <span className="text-primary">Inverge<br></br>Bringing Co-working spaces and entrepreneurial communities online. Inverge is SaaS software for entrepreneurial communities to bring their physical communities online, and connect with similar communities all over the globe.</span><br></br>
            <span><a className="btn btn-info"><Link to="/inverge">View Project Details</Link></a></span><br></br>
          <span><a><img src={"./github2.png"}/></a><a href="https://inverge-client-staging.herokuapp.com/"><img src={"./domain2.png"}/></a></span>
            </span>

          </div>
          <div className="imageBox">
              <img className="img-responsive imgProject" src={"./PIXELAID.png"} alt="Hello"/>
              <span className="text-content">
                <span className="text-primary">Pixelaid<br></br>A gamified way for teams & startups to encourage team recognition with pixel points earned from kudos & answer forum. -inspired by reddit/places
                </span><br></br>
                <span><a href="https://github.com/Pixelaid-Team/Pixelaid"><img src={"./github2.png"}/></a><a href="http://www.pixelaidapp.com/"><img src={"./domain2.png"}/></a></span>
              </span>
            </div>
          <div className="imageBox">
              <img className="img-responsive imgProject" src={"./PC_circle.png"} alt="Hello"/>
              <span className="text-content">
                <span className="text-primary">PC Beverages<br></br>PC Bevs was started with the mission of creating a Chapel Hill based beverage company that provided low sugar, and no sugar, healthy drink alternatives that taste delicious and don't break the bank. We disbanded the company after graduating from UNC - Chapel Hill
                </span><br></br>
              </span>
            </div>
            <div className="imageBox">
                <img className="img-responsive imgProject" src={"./think_circle.png"} alt="Hello"/>
                <span className="text-content">
                  <span className="text-primary">Carolina THINK <br></br> UNC’s Entrepreneurship Club <br></br>We help students from a wide range of academic backgrounds develop entrepreneurship and innovation as a set of core life skills. In addition to hosting our own panels, workshops, and other events, we also connect students to the Triangle’s vibrant entrepreneurship scene through meetups and THINKternships.
                  </span><br></br>
                  <span><a href="http://carolinathink.com/"><img src={"./domain2.png"}/></a></span>
                </span>
            </div>
            <div className="imageBox">
                <img className="img-responsive imgProject" src={"./Jooster.png"} alt="Hello"/>
                <span className="text-content">
                  <span className="text-primary">Jooster<br></br>A world of nutrition in a tiny pod <br></br> We are in stealth mode, building a company that will revolutionize how people get and monitor their nutrition.
                  </span><br></br>
                <span><a href="http://www.jooster.com/"><img src={"./domain2.png"}/></a></span>
                </span>
            </div>
            <div className="imageBox">
                <img className="img-responsive imgProject" src={"./HATCH.png"} alt="Hello"/>
                <span className="text-content">
                  <span className="text-primary">
                  </span><br></br>
                <span><a href="https://github.com/weHatch/iHatch"><img src={"./github2.png"}/></a><a href="http://ihatchprojects.herokuapp.com/"><img src={"./domain2.png"}/></a></span>
                </span>
            </div>
            <div className="imageBox">
                <img className="img-responsive imgProject" src={"./microLens.png"} alt="Hello"/>
                <span className="text-content">
                  <span className="text-primary">MicroLens is consumer facing food tracker, that allows you to track the food you eat based upon Micro/Macro nutrients compared to your Daily Recommended Intake. Using MicroLens you can easily identify gaps in your nutrition and get whole nutrient comparison to improve your diet.
                  </span><br></br>
                <span><a href="https://github.com/MicroNutra"><img src={"./github2.png"}/></a><a href="http://mycro.herokuapp.com/"><img src={"./domain2.png"}/></a></span>
                </span>
            </div>
            <div className="imageBox">
                <img className="img-responsive imgProject" src={"./nomadic.png"} alt="Hello"/>
                <span className="text-content">
                  <span className="text-primary">A gamified way for teams & startups to encourage team recognition with pixel points earned from kudos & answer forum. -inspired by reddit/places
                  </span><br></br>
                <span><a href=""><img src={"./github2.png"}/></a><a href=""><img src={"./domain2.png"}/></a></span>
                </span>
            </div>
            <div className="imageBox">
                <img className="img-responsive imgProject" src={"./BREWLIST.png"} alt="Hello"/>
                <span className="text-content">
                  <span className="text-primary">BrewList is a beer recommendation app that allows you to add recommended beers to an ongoing personal beer wish list, with beer you want to try.
                  </span><br></br>
                <span><a href="https://github.com/devinhanaway/brewListApp"><img src={"./github2.png"}/></a><a href="https://brewlist-f3205.firebaseapp.com/"><img src={"./domain2.png"}/></a></span>
                </span>
            </div>
      </div>
    )
  }
}
