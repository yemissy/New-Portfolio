import React, { Component } from 'react';
import './App.css';
// import Landing from "./Components/LandingPage/landingpage";
// import Bookservice from "./Components/BookService/bookservice";
// import Braidsxcrafts from "./Components/BraidsXcrafts/braidsXcrafts";
// import Projects from './Components/ProjectsPage/projects';
import Header from "./Components/Header/header";
// import Footer from "./Components/Footer/footer";
 import Container from './Components/PagesContainer/pagescontainer'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentView: "landing"
    }
  }


  updateView = (view) => {
    this.setState({
      currentView: view
    })
  }
  

  //In componentdidMount listen for window scroll event and call the scroll fucntion

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, true)
  }

  onScroll = () => {
    console.log(window.innerHeight, window.scrollY, document.body.offsetHeight)
  }
  


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header> 
        <Container />
      </div>
    );
  }
}

export default App;
