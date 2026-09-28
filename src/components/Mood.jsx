import React from 'react'
import {useEffect,useState} from "react"
import sunGood from "../assets/sunGood.png";
import terrible from "../assets/terrible.png";
import sad from "../assets/sad.png";
import happy from "../assets/happy.png";
import verySad from "../assets/verySad.png";
import amazing from "../assets/amazing.png";
import okay from "../assets/okay.png";
import DashboardCard from "./DashboardCard";

export default function Mood() {
  const [mood,setMood]=useState(localStorage.getItem("mood")!==null?localStorage.getItem("mood"):"😃 Happy");
  const [content,setContent]=useState(localStorage.getItem("content")!==null?JSON.parse(localStorage.getItem("content")):{emoji:happy,p1:"Happy",p2:"Keep smiling! Enjoy this beautiful moment. ☀️",sno:6});
  useEffect(()=>{
    localStorage.setItem("mood",mood);
    localStorage.setItem("content",JSON.stringify(content));
  },[mood,content]);
  return (
    <div style={{ height: "100vh" }}>
      <div style={{ marginLeft: "50px", marginTop: "10px" }}>
        <h3>
          <b>Mood</b>
        </h3>
        <p>How are you feeling today?</p>
      </div>
      <div className="dropdown" style={{marginLeft:"50px"}}>
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{backgroundColor:"white", color:"black", width:"150px"}}
        >
          {mood}
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#" onClick={()=>{setMood("😭 Terrible"), setContent({emoji:terrible,p1:"Terrible",p2:"It’s okay to have difficult days. Take it one step at a time. ❤️" ,sno:1})}}>
              😭 Terrible
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" onClick={()=>{setMood("😢 Very Sad"), setContent({emoji:verySad,p1:"Very Sad",p2:"Be gentle with yourself today. Better moments will come. 🌷",sno:2})}}>
              😢 Very Sad
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" onClick={()=>{setMood("😞 Sad"), setContent({emoji:sad,p1:"Sad",p2:"You don’t have to fix everything today. Just keep going. 💛",sno:3})}}>
              😞 Sad
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" onClick={()=>{setMood("😐 Okay"), setContent({emoji:okay,p1:"Okay",p2:"Some days are simply okay, and that’s perfectly fine. 🌿",sno:4})}}>
              😐 Okay
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" onClick={()=>{setMood("😊 Good"), setContent({emoji:sunGood,p1:"Good",p2:"You’re doing well! Keep that positive energy going. ✨",sno:5})}}>
              😊 Good
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" onClick={()=>{setMood("😃 Happy"), setContent({emoji:happy,p1:"Happy",p2:"Keep smiling! Enjoy this beautiful moment. ☀️",sno:6})}}>
              😃 Happy
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" onClick={()=>{setMood("🤩 Amazing"), setContent({emoji:amazing,p1:"Amazing",p2:"You’re shining today! Make the most of it! 🌟",sno:7})}}>
              🤩 Amazing
            </a>
          </li>
        </ul>
      </div>
      <br></br>
      <div style={{height:"320px", width:"850px", backgroundColor:"lightyellow", marginLeft:"50px", paddingTop:"10px"}}>
        <div style={{backgroundImage: `url(${content.emoji})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "200px", width:"200px", marginLeft:"330px"}}></div>
        <br></br>
        <div style={{marginLeft:"250px"}}>
          <div style={{marginLeft:"130px"}}><h3><b>{content.p1}</b></h3></div>
          <p>{content.p2}</p>
        </div>
      </div>
    </div>
  );
}
