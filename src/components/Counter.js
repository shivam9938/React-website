import React, {Component} from "react";
import './Style.css';
import { Link } from "react-router-dom";
 

export default class Counter extends Component{
    constructor(props){
        super(props)
        this.state= {
            count: 0,
            message: "Hello"
        }
    }
      getCount = () => {
        this.setState({
            count : this.state.count + 1
        
      })

    }

        refreshCount =() => {
            this.setState({
                count: 0
            })
        
        }

    render(){
        return(
            <React.Fragment>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>   
            <div className="sidebar">
            <Link to="/">Home</Link>
            <Link to="/counter" className="active">Click Game</Link>
            <Link to="/todolist">To Do List</Link>
            <Link to="/coordinates">Coordinates</Link>
            <Link to="/datafetching">DataFetching</Link>
            </div> 
            
            <h1 className="heading">You Clicked {this.state.count} times</h1>
            <br></br>
           <button onClick={this.getCount}>Click</button> <button onClick={this.refreshCount}>Reset</button>
           <br></br>
           <br></br>
           <br></br>
           <h3 className="hoverheading" onMouseOver={this.getCount}>Hover over to increase the Count</h3>
            </React.Fragment>
        );
    }

}