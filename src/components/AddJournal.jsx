import React, { useState } from 'react'
import {Link} from "react-router-dom"

const AddJournal = (props) => {
  const [title,setTitle]=useState("");
    const [date,setDate]=useState("");
    const [thoughts,setThoughts]=useState("");
    const submit=(e)=>{
      e.preventDefault();
      if(!title || !date  || !thoughts){
        alert("Title, date or thoughts cannot be blank");
      }
      else{
        props.addJournal(title,date,thoughts);
        setTitle("");
        setDate("");
        setThoughts("");
      }
    }
  return (
    <div style={{marginLeft:"50px", marginTop:"10px", height:"100vh"}}>
      <div style={{display:"flex"}}>
        <Link to="/journal" style={{color:"black"}}><div style={{paddingTop:"10px"}}><i className="fa-solid fa-arrow-left"></i></div></Link>
        <div style={{marginLeft:"20px"}}><div style={{fontSize:"25px", height:"10px"}}><b>New Journal Entry</b></div><br></br>Write your thoughts.Reflect.Grow.</div>
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
      <br></br>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Date
        </label>
        <input
          type="date"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter a title..."
          value={date} onChange={(e)=>{setDate(e.target.value)}}
        />
      </div>
      <br></br>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Your Thoughts
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Start writing..."
          value={thoughts} onChange={(e)=>{setThoughts(e.target.value)}}
        ></textarea>
      </div>
      <div><Link to="/journal"><button style={{backgroundColor: "white",
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
                marginLeft:"10px"}} type="submit" onClick={submit}>Save Entry</button></div>
    </div>
  );
}
export default AddJournal
