import React from "react";
import "./projects.css";

export default function projects(props){
    return(
        <div className="projects-container" onScroll={ () => props.updateView("projects")}>
            <div className="projects"><h1>Projects</h1></div>
        </div>
    )
}