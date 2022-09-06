import React from 'react';

const styling = {
    color: 'Red'
}

export default function Test(props) {
    // // // console.log(props); 
    const list = ["golu","hello", "anamika", "mahadev"]
    const handler = list.map((name, index) => <h1 key={index}>{name}</h1>)

    console.log("htunhj")

     return( 
    // // <div> 
    // <h1>{props.name}</h1>

   // {props.children}
   // </div> 
   <div style={styling}>
       {handler}
       
   </div>
    );
}

