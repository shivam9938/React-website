import React from "react";

 function Memo({name}){
    console.log("Rendering Memo")
    return(
        <div>
            Memo Component
            {name}
            
        </div>
    )
}

export default React.memo(Memo)