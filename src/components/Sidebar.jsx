import React from 'react'
import {Link} from "react-router-dom"

export default function Sidebar() {
  let sidebarStyle={
    width:"25%",
    backgroundColor:"#E5E7EB",
    minHeight:"100vh",
    fontSize:"23px",
    paddingLeft:"20px",
    

  }
  let inside={
    height:"60px"
  }
  return (
    <div style={sidebarStyle}>
        <br></br>
        <div style={inside}><Link to="/" className="inside"><i className="fa-solid fa-house" style={{marginRight:"10px"}}></i>Home</Link><br></br></div>
        <div style={inside}><Link to="/goals" className="inside"><i className="fa-solid fa-bullseye" style={{marginRight:"10px"}}></i>Goals</Link><br></br></div>
        <div style={inside}><Link to="/tasks" className="inside"><i className="fa-solid fa-list-check" style={{marginRight:"10px"}}></i>Tasks</Link><br></br></div>
        <div style={inside}><Link to="/habits" className="inside"><i className="fa-solid fa-fire" style={{marginRight:"10px"}}></i>Habits</Link><br></br></div>
        <div style={inside}><Link to="/mood" className="inside"><i className="fa-regular fa-face-smile" style={{marginRight:"10px"}}></i>Mood</Link><br></br></div>
        <div style={inside}><Link to="/journal" className="inside"><i className="fa-solid fa-book" style={{marginRight:"10px"}}></i>Journal</Link><br></br></div>
        <div style={inside}><Link to="/ai-insight" className="inside"><i className="fa-solid fa-lightbulb" style={{marginRight:"10px"}}></i>AI-insight</Link></div>
    </div>
  )
}
