import React, { Component } from 'react';
import './App.css';
// import Header from './components/Header'
import Landing from './components/Landing'
import About from './components/About'
import Projects from './components/Projects'

const myTitle =['Product Manager','Software Developer','Entrepreneur', 'Adventurer']

class App extends Component {
  constructor(){
    super()
    this.state = {
      title: "Product Manager"
    }
  }

  render() {

    setTimeout(()=>{
      const i = Math.floor(Math.random() * 4)
      this.setState({title: myTitle[i]})
    }, 4000)

    return (
      <div className="App">

        <Landing title={this.state.title}/>
        {/* <Header /> */}
        <About />
        <Projects />


      </div>
    );
  }
}

export default App;
