import React from "react";
import "./projects.css"


export default function projects(props){
    return(
        <div className="projects" onScroll={ () => props.updateView("projects")}>
            Projects
        </div>
    )
}