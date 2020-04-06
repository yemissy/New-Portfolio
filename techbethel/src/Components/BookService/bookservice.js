import React from "react";
import "./bookservice.css"


export default function bookservice(props){
    return(
        <div className="bookservice" onScroll={() => props.updateView("bookservice")}>
            bookservice
        </div>
    )
}