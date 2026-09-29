import React from 'react'
import {Link} from "react-router-dom"


export default function DashboardCard() {
  let content=JSON.parse(localStorage.getItem("content"))||{sno:5};
  let totalTodos=JSON.parse(localStorage.getItem("totalTodos"))||0;
  let completedTodos=JSON.parse(localStorage.getItem("completedTodos"))||0;
  let todos=JSON.parse(localStorage.getItem("todos"))||[];
  let journals=JSON.parse(localStorage.getItem("journals"))||[];
  let totalHabits=JSON.parse(localStorage.getItem("totalHabits"))||0;
  let totalGoals=JSON.parse(localStorage.getItem("totalGoals"))||0;
  console.log(totalHabits);
  let cardStyle={
    height:"600px",
    width:"930px",
    backgroundColor:"#F8F9FA",
    marginTop:"10px",
    marginLeft:"10px",
  }
  let upperCard={
    height:"65px",
    fontSize:"17px",
    marginLeft:"10px",
    marginTop:"5px"
  }
  let cardStyle1={
    width:"920px",
    height:"130px",
    display:"flex",
    marginLeft:"20px"
  }
  let card1={
    backgroundColor:"white",
    width:"220px",
    height:"120px",
    marginRight:"20px",
    fontSize:"15px",
    paddingTop:"10px",
    display:"flex"
  }
  let card2={
    backgroundColor:"white",
    width:"465px",
    height:"190px",
    marginRight:"20px",
    paddingLeft:"10px",
    paddingTop:"10px",
    fontSize:"15px"
  }
  let card3={
    width:"465px",
    height:"190px",
    marginRight:"20px",
    fontSize:"15px"
  }
  let innerCard1={
    width:"465px",
    backgroundColor:"white",
    height:"100px",
    paddingLeft:"10px",
    paddingTop:"10px"
  }
  let innerCard2={
    width:"465px",
    backgroundColor:"white",
    height:"80px",
    marginTop:"10px",
    paddingLeft:"10px",
    paddingTop:"10px"
  }
  let lowerCard={
    height:"120px",
    width:"900px",
    marginLeft:"20px",
    backgroundColor:"white",
    marginTop:"70px",
    paddingLeft:"10px",
    paddingTop:"10px",
    fontSize:"15px"
  }
  return (
    <div style={cardStyle}>
      <div style={upperCard}><b>Good morning,Reva!</b><br></br>Let's make today productive and meaningful.</div>
      <div style={cardStyle1}>
        <div style={card1}><div style={{backgroundColor:"#def8ea", width:"70px", height:"70px", padding:"10px", paddingTop:"15px", marginLeft:"15px", borderRadius:"10%"}}><i className="fa-solid fa-bullseye" style={{color: "green", fontSize:"40px"}}></i></div><div style={{marginLeft:"20px"}}><b>Goals</b><div style={{fontSize:"30px"}}><b>{totalGoals}</b></div><div style={{fontSize:"12px"}}>total goals</div></div></div>
        <div style={card1}><div style={{backgroundColor:"#e2e9fa", width:"70px", height:"70px", padding:"10px", paddingTop:"15px", marginLeft:"15px", borderRadius:"10%"}}><i className="fa-solid fa-list-check" style={{color: "#1555d1", fontSize:"40px"}}></i></div><div style={{marginLeft:"20px"}}><b>Tasks</b><div style={{fontSize:"30px"}}><b>{completedTodos}</b>/{totalTodos}</div><div style={{fontSize:"12px"}}>tasks completed</div><div><input type="range" className="form-range" min="0" max={totalTodos} id="range2" value={completedTodos} style={{width: "100px"}} readOnly></input></div></div></div>
        <div style={card1}><div style={{backgroundColor:"#fae1cd", width:"70px", height:"70px", padding:"10px", paddingTop:"15px", marginLeft:"15px", borderRadius:"10%"}}><i className="fa-solid fa-fire" style={{color: "red", fontSize:"40px"}}></i></div><div style={{marginLeft:"20px"}}><b>Habits</b><div style={{fontSize:"30px"}}><b>{totalHabits}</b></div><div style={{fontSize:"12px"}}>total habits</div></div></div>
        <div style={card1}><div style={{backgroundColor:"#FFF8E1", width:"70px", height:"70px", padding:"10px", paddingTop:"15px", marginLeft:"15px", borderRadius:"10%"}}><i className="fa-regular fa-face-smile" style={{color: "#C58A00", fontSize:"40px"}}></i></div><div style={{marginLeft:"20px"}}><b>Mood</b><div style={{fontSize:"30px"}}><b>{content?.sno}</b>/7</div><div style={{fontSize:"12px"}}>today's mood</div><div><input type="range" className="form-range" min="0" max="7" id="range2" value={content?.sno} style={{width: "100px"}} readOnly></input></div></div></div>
      </div>
      <div style={cardStyle1}>
        <div style={card2}><div style={{display:"flex"}}><div><b>Today's Focus</b></div><div style={{marginLeft:"200px"}}><Link to="/tasks"><button style={{backgroundColor:"#f5f0ff", border:"none", borderRadius:"5px"}}><i className="fa-solid fa-pencil" style={{color: "rgb(121,94,197)"}}></i></button></Link></div></div><div style={{display:"flex"}}><div style={{marginTop:"10px"}}>{todos.slice(0,5).map((todo) => (<div style={{display:"flex"}} key={todo?.sno}>
                 <div style={{marginTop:"5px"}}>
                  <input
                    className="form-check-input mt-0"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                    checked={todo.ticked}
                 />
                </div>
             <div style={{marginLeft:"10px"}}>{todo.title}</div></div>))}
             </div>
             {todos.length>5?<div style={{marginTop:"120px", marginLeft:"50px"}}>+more</div>:""}</div>
        </div>
        <div style={card3}>
          <div style={innerCard1}><b>Motivation for You</b>
            <div style={{backgroundColor:"#fef391", height:"60px", width:"445px", borderRadius:"8px", fontSize:"14px", padding:"10px"}}><i>You don't have to be great to start, but you have to start to be great.</i><br></br><b>-Zig Ziglar</b></div>
          </div>
          <div style={innerCard2}><b>Quick Add</b>
            <div style={{display:"flex", marginTop:"5px"}}>
              <div><Link to="/addgoal"><button style={{backgroundColor:"#def8ea", color:"green", border:"none",fontSize:"17px", padding:"5px", marginLeft:"15px", borderRadius:"8px"}}><i className="fa-solid fa-bullseye" style={{color: "green"}}></i>Add Goal</button></Link></div>
              <div><Link to="/addtasks"><button style={{backgroundColor:"#e2e9fa", color:"#1555d1", border:"none",fontSize:"17px", padding:"5px", marginLeft:"15px", borderRadius:"8px"}}><i className="fa-solid fa-list-check" style={{color: "#1555d1"}}></i>Add Task</button></Link></div>
              <div><Link to="/addjournal"><button style={{backgroundColor:"#f5f0ff", color:"purple", border:"none",fontSize:"17px", padding:"5px", marginLeft:"15px", borderRadius:"8px"}}><i className="fa-solid fa-pencil" style={{color: "purple"}}></i>Add Note</button></Link></div>
            </div>
          </div>
        </div>
      </div>
      <div style={lowerCard}><b>Recent Journal Entry</b><br></br><br></br><div>{journals && journals.map((journal)=>(journal?.sno===journals.length-1?(journal.thoughts.length>=80?<>{journal.thoughts.slice(0,80)+"..."}<br/>{journal.date}</>:<>{journal.thoughts}<br/>{journal.date}</>):""))}</div></div>
      
    </div>
  )
}
