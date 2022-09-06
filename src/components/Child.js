import React from "react";

export default function Child({greethandler}){

    return(
        <div>
            <button onClick={greethandler}>Click to Greet</button>
            
        </div>
    )
}