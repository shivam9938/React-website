import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';  

export default function Random(){
    const [value, setValue]= useState("red");

    const handling = () =>{
        setValue({
            color:"blue"
        })
    }
    return(
        
            <React.Fragment>
         
          <div>
              
           <h1>{value.color}</h1>     
           <button className="btn btn-primary" onClick={handling}>click</button>
           </div>
           </React.Fragment>
       
    )
}