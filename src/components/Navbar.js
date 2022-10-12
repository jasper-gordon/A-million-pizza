//import { display } from "@mui/system";
import { responsiveFontSizes } from "@mui/material";
import { type } from "@testing-library/user-event/dist/type";
//import { response } from "express";
import {Link} from "react-router-dom";
import '../App.css';
import logo from "../assets/Logo.png";
import React, {useState} from "react";
import { resolveComponentProps } from "@mui/base";


export default function Navbar() {
    
    const [count, setCount] = React.useState()
    
    //Requesting YouTube View data from backend server
    const getViews = async() => {
        const response = await fetch("http://localhost:8000/views")
        const finalData = await (response.text())
        let data = await (JSON.parse(finalData))
        //Updating state with view count
        setCount(data.items[0].statistics.viewCount)
   
    }
    

    //console.log('data', res);
    //getViews()
    
    //document.getElementById("data").innerHTML = data;
    return <nav className="nav">
        
        <div className="NavColor">
        <Link to="/" className="site-title" ><img className="image-link" src={logo} alt="A Million Pizza Logo"></img></Link>
        <div className="countBox">
        <p className="pizzaCount">Pizza Count: 2992</p>
        </div>
        <div className="grid">
        <Link to="/pizzas" 
            className="navLink" > Pizzas</Link>
        <Link to="/videos" className="navLink"> Videos</Link>
        <Link to="/tips" className="navLink"> Tips</Link>      
        </div>
        </div>
    </nav>
}
