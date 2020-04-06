import React from "react";
import "./braidsXcrafts.css"


export default function braidsXcrafts(props){
    return(
        <div className="braidsXcrafts" onScroll ={ () => props.updateView("braidsandcrafts")}>
            braidsXcrafts
        </div>
    )
}