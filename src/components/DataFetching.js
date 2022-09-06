import React, { useEffect, useState } from "react";
import './Style.css';
import axios from "axios";
import { Link } from "react-router-dom";
import photo from '../images/photo1.PNG';
import photos from '../images/photo2.PNG';

export default function DataFetching(){
    const[posts, setPosts] = useState(['']);
    const[image, setImage] = useState({photo})

    
    
    useEffect(()=>{
       axios.get('http://jsonplaceholder.typicode.com/users')
       .then(res=>{
           setPosts(res.data)
       })
        .catch(err=>{
            console.log(err)
        })
   },[])

//    const imageHandle=() =>{
//        setImage : false
//    }


   const post = posts.map(posts => ( <tr key={posts.id}><td>{posts.id}</td><td>{posts.name}</td></tr>))


    return(
    <React.Fragment>
       <div className="sidebar">
            <Link to="/">Home</Link>
            <Link to="/counter">Click Game</Link>
            <Link to="/todolist">To Do List</Link>
            <Link to="/coordinates">Coordinates</Link>
            <Link to="/datafetching" className="active">DataFetching</Link>
            </div> 
      <div className="fetch">     
    <table style={{width:"100%"}}>
        <th>
        {post}
        </th>
    </table>
    </div>
    <div>
        <img src= {image}
        onMouseEnter= {
            setImage({photos})
                
            
        }
        onMouseOut={
            setImage({photo})
        }
        />
        
    </div>
        </React.Fragment>
    )
}