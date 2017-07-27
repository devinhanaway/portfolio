import React, { Component } from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const myTitle =['Product Manager','Software Developer','Entrepreneur', 'Adventurer']

export default class Inverge extends Component{
  constructor(){
    super()
    this.state = {
      title: "Product Manager"
    }
  }
  render(){
    setTimeout(()=>{
      const i = Math.floor(Math.random() * 4)
      this.setState({title: myTitle[i]})
    }, 2000)
    return(
      <div>
        <div className="container ">
          <h1 className="header">Inverge</h1>
        </div>
        <div className="center">

            <div className="imageBox">
            <img className="img-responsive imgProject" src={"./Inverge_circle.png"} alt="Hello"/>
            <span className="text-content">
              <span className="text-primary">Inverge<br></br>Bringing Co-working spaces and entrepreneurial communities online. Inverge is SaaS software for entrepreneurial communities to bring their physical communities online, and connect with similar communities all over the globe.</span><br></br>
            <span><a><img src={"./github2.png"}/></a><a href="https://inverge-client-staging.herokuapp.com/"><img src={"./domain2.png"}/></a></span>
            </span>

          </div>
        </div>
        <div className="container aboutDiv">
          <h1 className="col-md-12">What is Inverge</h1>
        <p>Bringing Co-working spaces and entrepreneurial communities online. Inverge is SaaS software for entrepreneurial communities to bring their physical communities online, and connect with similar communities all over the globe.</p>

        <p></p>

        <p> </p>
        </div>
        <div className="container aboutDiv">
          <h1 className="col-md-12">Roles I played</h1>
        <p></p>
        </div>
        <div className="container aboutDiv">
          <h1 className="col-md-12">Technology Used</h1>
        <p></p>
        </div>
      </div>
    )
  }
}
