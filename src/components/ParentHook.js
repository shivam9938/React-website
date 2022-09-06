import React, { useState } from "react";
import ChildHook from "./ChildHook";
import { Link } from "react-router-dom";
import './Style.css';

export default function ParentHook(){
    const [count, setCount]= useState(0);

    const handling = () =>{
        setCount(
           count+1
        
            )
    }
    return(
        
            <React.Fragment>
         
          <div>
              
           <h1>You Clicked {count} times</h1>     
           <ChildHook handle={handling}></ChildHook>
           </div>
           </React.Fragment>
       
    )
}