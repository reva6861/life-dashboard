import React, { useState } from 'react'
import {Link} from "react-router-dom"

export default function AddHabit(props) {
    const [title,setTitle]=useState("");
    
    const submit=(e)=>{
          e.preventDefault();
          if(!title){
            alert("Title cannot be blank");
          }
          else{
            props.addHabit(title);
            setTitle("");
            
          }
        }
  return (
    <div style={{marginLeft:"50px", marginTop:"10px", height:"100vh"}}>
      <div style={{display:"flex"}}>
        <Link to="/habits" style={{color:"black"}}><div style={{paddingTop:"10px"}}><i className="fa-solid fa-arrow-left"></i></div></Link>
        <div style={{marginLeft:"20px"}}><div style={{fontSize:"25px", height:"10px"}}><b>New Habit Entry</b></div><br></br>Write your new habit.</div>
      </div>
      <br></br>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter a title..."
          style={{width:"700px"}}
          value={title} 
          onChange={(e)=>{setTitle(e.target.value)}}
        
        />
      </div>
      
      <div><Link to="/habits"><button style={{backgroundColor: "white",
                color: "black",
                fontSize: "17px",
                paddingLeft: "10px",
                paddingRight:"10px",
                borderRadius: "8px"}}>Cancel</button></Link><button style={{backgroundColor: "rgb(129, 52, 211)",
                color: "white",
                border: "none",
                fontSize: "15px",
                padding: "5px",
                borderRadius: "8px",
                paddingLeft: "10px",
                paddingRight:"10px",
                marginLeft:"10px"}} type="submit" onClick={submit}>Save Habit</button></div>
    </div>
  )
}
