import React, {Component} from "react";
import Child from "./Child";

export default class Parent extends Component{


    constructor(props){
        super(props)
        this.state= {
            message: ""
        }
    }

    greetParent(){
        this.setState({
            message: "Hello Papa"
        
        });
    }


    render(){
        return(
        <div>
            <div>{this.state.message}</div>
            <Child greethandler={()=>this.greetParent()} ></Child>
        </div>
        );
    }
}
