import React from "react";
import ParentHook from "../components/ParentHook";
import './style.css';
import { Link } from "react-router-dom";
import homeImg from '../images/home.jpg';
import Timer from "../components/Timer";
export default function Menu(){

    

    return(
    <React.Fragment>
    
        <div className="sidebar">
    <Link to="/" className="active">Home</Link>
    <Link to="/counter">Click Game</Link>
    <Link to="/todolist">To Do List</Link>
    <Link to="/coordinates">Coordinates</Link>
    <Link to="/datafetching">DataFetching</Link>
    </div>
    <div>
    <Timer></Timer>
    <img src={homeImg} className="photo"/>
    
    </div>
            
        </React.Fragment>
    )
}