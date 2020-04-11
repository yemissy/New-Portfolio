import React from 'react';
import Landing from "../LandingPage/landingpage";
// import Bookservice from "../BookService/bookservice";
// import Braidsxcrafts from "../BraidsXcrafts/braidsXcrafts";
import Projects from '../ProjectsPage/projects';
// import Footer from "../Footer/footer";
import "./pagescontainer.css"




export default function Container(props){
    
    let pages = [<Landing />, <Projects/>]
    
    
    //Write a function to handle scroll
    
    // const onScroll = () => {
    //     console.log(window.innerHeight, window.scrollY, document.body.offsetHeight)
    // }




    return(
        <div className="container" >
           { pages.map((page, index) => (
               <div key={index}>{page}</div>
            ))}
        </div>
    )

}



