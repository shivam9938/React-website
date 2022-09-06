import React from "react";

export default function ChildHook({handle}){

    return(
        <div>
            <button onClick={handle}>Click to Greet</button>
            
        </div>
    )
}