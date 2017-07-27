import React, { Component } from 'react';
import '../App.css';
import {
  Link
} from 'react-router-dom'


const projects =[
  {image:"./Inverge_circle.png",
    name:"Inverge",
    description: "Bringing Co-working spaces and entrepreneurial communities online. Inverge is SaaS software for entrepreneurial communities to bring their physical communities online, and connect with similar communities all over the globe.",
    github:"https://inverge-client-staging.herokuapp.com/",
    url: "https://inverge-client-staging.herokuapp.com/",
    types: ['product', 'entrepreneur']
  },
  {image:"./PIXELAID.png",
    name:"Pixelaid",
    description: "A gamified way for teams & startups to encourage team recognition with pixel points earned from kudos & answer forum. -inspired by reddit/places",
    github:"https://github.com/Pixelaid-Team/Pixelaid",
    url: "http://www.pixelaidapp.com/",
    types: ['product', 'software']
  },
  {image:"./think_circle.png",
    name:"Carolina Think",
    description: "We help students from a wide range of academic backgrounds develop entrepreneurship and innovation as a set of core life skills. In addition to hosting our own panels, workshops, and other events, we also connect students to the Triangle’s vibrant entrepreneurship scene through meetups and THINKternships.",
    url: "http://carolinathink.com/",
    types: ['entrepreneur']
  },
  {image:"./Jooster.png",
    name:"Jooster",
    description: "A world of nutrition in a tiny pod | We are in stealth mode, building a company that will revolutionize how people get and monitor their nutrition.",
    url: "http://www.jooster.com/",
    types: ['entrepreneur']
  },
  {image:"./HATCH.png",
    name:"iHatch",
    description: "A way for you to keep track of your various idea, and hash out some of the details for hatching your idea, and making it a real product or service. ~ inspired by the physcial notebook kickstart, Hatch",
    github:"https://github.com/weHatch/iHatch",
    url: "http://ihatchprojects.herokuapp.com/",
    types: ['software']
  },
  {image:"./microLens.png",
    name:"MycroLens",
    description: "MicroLens is consumer facing food tracker, that allows you to track the food you eat based upon Micro/Macro nutrients compared to your Daily Recommended Intake. Using MicroLens you can easily identify gaps in your nutrition and get whole nutrient comparison to improve your diet.",
    github:"https://github.com/MicroNutra",
    url: "http://mycro.herokuapp.com/",
    types: ['software', "product"]
  },
  {image:"./nomadic.png",
    name:"Nomadic Perspective",
    description: "A Global group of thought leaders, entrepreneurs, and innovators who share a desired interest to grow, learn and be challenged by people and the world around them. We meet on a monthly basis to discuss projects, and issues facing our respective communities",
    types: ['entrepreneur']
  },
  {image:"./BREWLIST.png",
    name:"BrewList",
    description: "BrewList is a beer recommendation app that allows you to add recommended beers to an ongoing personal beer wish list, with beer you want to try.",
    github:"https://github.com/devinhanaway/brewListApp",
    url: "https://brewlist-f3205.firebaseapp.com/",
    types: ['software']
  },
  {image:"./nomads.png",
    name:"Nomads",
    description: "Nomads is a map and directory of your closest friends, and all of their first degree connections from around the world. Creating meaningful global connections.",
    github:"https://github.com/devinhanaway/nomads",
    url: "https://www.nomads.community/landing",
    types: ['software']
  },
]
var filt = null
function filterProj(projects){

  return projects.filter(proj => {
    if(filt == null){
      return proj
    }
    return proj.types.contains(filt)
  return proj
  }).map(proj=>{
    return (<div className="imageBox">
        <img className="img-responsive imgProject" src={proj.image} alt="Hello"/>
        <span className="text-content">
          <span className="text-primary">{proj.name}<br></br>{proj.description}
          </span><br></br>
        <span><a href={proj.github}><img src={"./github2.png"}/></a><a href={proj.url}><img src={"./domain2.png"}/></a></span>
        </span>
      </div>)
  })
}


export default class Projects extends Component{
  constructor(){
    super()
    this.state = {
      currentType: null,
      // filterProj: filterProj(projects),
      projects
    }
  }


  render(){
    return(

      <div>
        <div className="container ">
          <h1 className="header">My Projects</h1>
        </div>
        <div className="container projectsheader btn-group ">
          {/* <a className="btn btn-default"><Link to="/projects">All Projects</Link></a>
          <a className="btn btn-default"></a>
          <a className=" btn btn-default"></a>
          <a className=" btn btn-default"></a> */}
        </div>
        <div className="container projectDisplay">
          {filterProj(this.state.projects)}
        </div>


      </div>
    )
  }
}
