import React from "react";
import "./header.css"
import MenuIcon from '@material-ui/icons/Menu';

export default function header(props){
    return(
        <div className="header">
            <MenuIcon fontSize="large"/>
            <h1>YEMISI ONAYEMI</h1>
        </div>
    )
}