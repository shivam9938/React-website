import React, { useEffect, useState } from "react";
import ParentHook from "../components/ParentHook";
import './Style.css';
import { Link } from "react-router-dom";


export default function Timer(){
    const[timer, setTimer] = useState(0);

    
    const tick = () =>{
        setTimer(timer+1)
    }
    
    useEffect(()=>{
       const interval =  setInterval(tick, 1000)
    
       return ()=>{
        clearInterval(interval)
    }
   },[timer])





    return(
    <React.Fragment>
      
    <div className="styleTimer" >
    <p>Timer</p>
    
        <h1>{timer} sec</h1>
      
        </div>
        </React.Fragment>
    )
}