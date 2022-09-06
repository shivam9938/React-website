import React, { Component } from 'react';  
  
export default class LifeCycle extends Component {  
   constructor(props) {  
      super(props);  
      this.state = {message: "Shivam"};  
      console.log("1"); 
   }    
   static getDerivedStateFromProps(props, state){
       console.log("2");
       return null;
   }
   render() {  
    console.log("3"); 
      return (  
         <div>  
             <h1>ReactJS class component's Lifecycle</h1>  
             <h3>Hello {this.state.message}</h3>  
               
                   
         </div>  
         
      );  
   }  
   componentDidMount() {  
      console.log("4")  
      
   }  
   
}  

