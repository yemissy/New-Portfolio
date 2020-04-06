import React, { Component } from 'react';
import './App.css';
import Landing from "./Components/LandingPage/landingpage";
import Bookservice from "./Components/BookService/bookservice";
import Braidsxcrafts from "./Components/BraidsXcrafts/braidsXcrafts";
import Projects from './Components/ProjectsPage/projects';
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      views: [Bookservice, Braidsxcrafts, Projects, Footer],
      currentView: "landing"
    }
  }


  updateView = (view) => {
    this.setState({
      currentView: view
    })
  }
  //Write a func to setview & getview 

  switchView = () => {
    switch (this.state.currentView) {
      case "projectS":
        return <Projects updateView={this.updateView}/>
      case "braidsandcrafts":
        return <Braidsxcrafts updateView={this.updateView}/>
      case "bookservice":
        return <Bookservice updateView={this.updateView}/>
      case "footer":
        return <Footer updateView={this.updateView}/>
      default:
        return <Landing updateView={this.updateView}/>
    }
  }

  //In componentdidMount listen for window scroll event and call the scroll fucntion

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  //Write a function to handle scroll
  onScroll = () => {
    
    if((window.innerHeight + window.scrollY) >= (document.body.offsetHeight)){
      console.log(window.innerHeight, window.scrollY, document.body.offsetHeight)
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        {this.switchView()}
        <Bookservice />
      </div>
    );
  }
}

export default App;
