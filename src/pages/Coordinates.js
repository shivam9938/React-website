import React, { useEffect, useState } from "react";
import ParentHook from "../components/ParentHook";
import './style.css';
import { Link } from "react-router-dom";


export default function Coordinates(){
    const[x, setX] = useState(0);
    const [y, setY]  = useState(0);
    
    const mousePosition = (e) =>{
        setX(e.clientX)
        setY(e.clientY)
    }
    
    useEffect(()=>{
        window.addEventListener('mousemove', mousePosition)
    },[]


     )


    return(
    <React.Fragment>
        <div className="sidebar">
    <Link to="/">Home</Link>
    <Link to="/counter">Click Game</Link>
    <Link to="/todolist">To Do List</Link>
    <Link to="/coordinates" className="active">Coordinates</Link>
    <Link to="/datafetching">DataFetching</Link>
    </div>
    <div >
    <h1 className="heading">2D Coordinates</h1>
    
         <h2>X-{x}</h2> <h2>Y-{y}</h2>
      
        </div>
        </React.Fragment>
    )
}