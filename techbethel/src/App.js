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
      case "projects":
        return <Projects />
      case "braidsandcrafts":
        return <Braidsxcrafts />
      case "bookservice":
        return <Bookservice />
      case "foter":
        return <Footer />
      default:
        return <Landing />
    }
  }

  //In componentdidMount listen for window scroll event and call the scroll fucntion

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  //Write a function to handle scroll
  onScroll = () => {
    console.log(window.innerHeight, window.scrollY)
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        {this.switchView()}
        <Projects/>
      </div>
    );
  }
}

export default App;
