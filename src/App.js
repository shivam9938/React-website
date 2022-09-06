import React from 'react';
import './App.css';
import Test from './components/Test';
import Counter from './components/Counter';
import Parent from './components/Parent';
import LifeCycle from './components/LifeCycle';
import ParentHook from './components/ParentHook';
import Menu from './pages/Menu';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import TestingComponent from './components/TestingComponent';
import ToDoList from './pages/ToDolist';
import Coordinates from './pages/Coordinates';
import Timer from './components/Timer';
import DataFetching from './components/DataFetching';



function App() {
  return (
    // <TestingComponent></TestingComponent>
    
    <Router>
    <div className="App">
      
        <Routes>
        <Route path="/" element={<Menu/>} ></Route>
        <Route path="/counter" element={<Counter/>} ></Route>
        <Route path="/todolist" element={<ToDoList/>} ></Route>
        <Route path="/coordinates" element={<Coordinates/>} ></Route>
        <Route path="/datafetching" element={<DataFetching/>} ></Route>      
        </Routes>
        </div>
    </Router>
      
    
    //   {/* <Parent></Parent> */}
    //    {/* <Test></Test>  */}
    //   {/* <LifeCycle></LifeCycle> */}
    //   {/* <ParentHook></ParentHook> */}
    // {/* <Test name="Testing for 9847938"><h5>Hello how are you</h5></Test>
    // <Test name="Testing for 9847939"></Test>
    // <Test name="Testing for 9847940"></Test> */}
    
  );
}

export default App;
