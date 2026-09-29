import React, { useState } from "react";
import robot from "../assets/robot.jpg";

export default function AIInsight() {
  const habits=JSON.parse(localStorage.getItem("habits"))||[];
  const habitTitles=habits.map((h)=>h.title).join(",");
  const goals=JSON.parse(localStorage.getItem("goals"))||[];
  const goalTitles=goals.map((g)=>g.title).join(",");
  const pendingTodos=JSON.parse(localStorage.getItem("pendingTodos"))||[];
  const taskTitles=pendingTodos.map((todo)=>todo.title).join(",");
  const journals=JSON.parse(localStorage.getItem("journals"))||[];
  const journalTitles=journals.map((j)=>j.title).join(",");
  const [insight,setInsight]=useState("");
  const [loading,setLoading]=useState(false);
  const getInsight=async()=>{
    console.log("Button clicked");
    setLoading(true);
    try{console.log("About to call backend");
        const response=await fetch("https://life-dashboard-api-gopa.onrender.com/api/insight",
        {method:"POST",
        headers:{"Content-Type":"application/JSON"},
        body:JSON.stringify({mood:JSON.stringify(localStorage.getItem("mood")),
              habits:habitTitles,
              tasks:taskTitles,
              goals:goalTitles,
              journals:journalTitles
        }),
        
      }
      )
      console.log("Backend responded");
      
      const data=await response.json();
      console.log("Data received:", data);
      setInsight(data.insight);
    }
    catch(error){
      console.log(error);
      setInsight("AI insight is temporarily unavailable. Please try again.");
    }
    setLoading(false);
  }
  return (
    <div style={{height:"100vh", marginLeft:"50px", marginTop:"10px"}}>
      <h1>AI Insight</h1>
      <p>Your personalized AI suggestion will appear here.</p>
      <div style={{display:"flex"}}>
        <div style={{backgroundImage: `url(${robot})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "200px", width:"200px"}}></div>
        <div style={{marginTop:"50px", width:"400px"}}>
          <button onClick={getInsight} style={{backgroundColor: "#6366F1", color: "white", border:"none", fontSize:"20px", padding:"5px"}}>Get AI Insight</button>
          <div style={{marginTop:"10px"}}>
            {loading?<p>Generating insight...</p>:""}
            <p>{insight}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
