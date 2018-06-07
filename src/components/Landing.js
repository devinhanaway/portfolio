import React, { Component } from 'react';
import '../App.css';

const myTitle =['Product Manager', 'Chef', 'Full Stack Developer','Entrepreneur', 'Nomad']


export default class Landing extends Component{
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
      <div className="landing">
        <h1 className="landing-title">{this.state.title}</h1>
      {/* <img className="img-responsive landing-title arrow" src={"./arrow.png"} alt="Hello"/> */}


      </div>
    )
  }
}
