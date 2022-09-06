import React, { Component } from "react";
import RegComp from "./RegComp";
import Memo from "./Memo";

export default class TestingComponent extends Component {
    
    constructor(props){
        super(props)
        this.state ={
            name: "Shivam"
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "Shivam"
            })

        }
        ,2000)
    }
    
    render(){
     console.log("Testing Component Render")   
    return(
        <div>
          Testing Component

          <RegComp name={this.state.name}></RegComp>
          <Memo name={this.state.name}></Memo>
           
            
        </div>
    )
    }
}
