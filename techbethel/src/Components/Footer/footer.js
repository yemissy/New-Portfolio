import React from "react";
import "./footer.css"


export default function footer(props){
    return(
        <div className="footer" onScroll ={ () => props.updateView("footer")}>

        </div>
    )
}