import React, { useState } from "react";
import './style.css';
import { Link } from "react-router-dom";
import DataFetching from "../components/DataFetching";
import Random from "../components/Random";

export default function ToDoList(){
    const[items, setItems] = useState([])
    const [ userInput, setUserInput ] = useState('');
    

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
        
    }

    const addItem = () => {
        setItems([ ...items, {
            id: items.length+1,
            task: userInput

        }

        ])

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserInput("");
        
    }
        
        
        
      const Lists = items.map(items => ( <li key={items.id}>{items.task}</li>))

    return(
    <React.Fragment>
        <div className="sidebar">
    <Link to="/">Home</Link>
    <Link to="/counter">Click Game</Link>
    <Link to="/todolist" className="active">To Do List</Link>
    <Link to="/coordinates">Coordinates</Link>
    <Link to="/datafetching">DataFetching</Link>
    </div>
    <div className="todo">
    <h1 className="heading">To Do List App</h1>
         <form onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={handleChange}></input> <button onClick={addItem} >Submit</button>
    </form>
    <br></br>
       <ul>
        {Lists}
        </ul>     
        </div>
        <Random></Random>
        </React.Fragment>
    )
}