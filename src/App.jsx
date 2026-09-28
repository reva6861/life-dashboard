import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import DashboardCard from "./components/DashboardCard"
import Journal from "./components/Journal"
import Tasks from "./components/Tasks"
import Goals from "./components/Goals"
import Habits from "./components/Habits"
import Mood from "./components/Mood"
import AIInsight from "./components/AIInsight"
import AddJournal from "./components/AddJournal"
import AddHabit from "./components/AddHabit"
import AddGoal from "./components/AddGoal"
import Todos from "./components/Todos";
import React,{useEffect, useState} from 'react';
import AddTodo from "./components/AddTodo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Link} from "react-router-dom"

function App() {
  let oneStyle={
    display:"flex"
  }
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [
      {
        sno: 1,
        title: "Go to the market",
        desc: "You need to go to the market to get this job done",
        ticked:false
      },
      {
        sno: 2,
        title: "Go to the mall",
        desc: "You need to go to the mall to get this job done",
        ticked:false
      },
      {
        sno: 3,
        title: "Go to the ghat",
        desc: "You need to go to the ghat to get this job done",
        ticked:false
      },
    ];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(todo)=>{
    console.log("I am onDelete",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }
  const addTodo=(title,desc)=>{
    console.log("I am adding this todo",title,desc);
    let sno;
    if(todos.length===0){
      sno=1;
    }
    else{
      sno=todos[todos.length-1].sno+1;
    }
    const myTodo={sno:sno,title:title,desc:desc,ticked:false};
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }
  const [todos,setTodos]=useState(initTodo);
  useEffect(()=>{localStorage.setItem("todos",JSON.stringify(todos));},[todos]);

  let initJournal;
  if(localStorage.getItem("journals")===null){
    initJournal = [];
  }
  else{
    initJournal=JSON.parse(localStorage.getItem("journals"));
  }
  const onDeleteJournal=(journal)=>{
    console.log("I am onDelete",journal);
    setJournals(journals.filter((e)=>{
      return e!==journal;
    }));
  }
  const addJournal=(title,date,thoughts)=>{
    console.log("I am adding this journal",title,date,thoughts);
    let sno;
    if(journals.length===0){
      sno=0;
    }
    else{
      sno=journals[journals.length-1].sno+1;
    }
    const myJournal={sno: sno,title: title,date: date,thoughts: thoughts};
    setJournals([...journals,myJournal]);
    console.log(myJournal);
  }
  const [journals,setJournals]=useState(initJournal);
  useEffect(()=>{localStorage.setItem("journals",JSON.stringify(journals));},[journals]);
  
  const toggleTodo=(sno)=>{
    const updatedTodos=todos.map((todo)=>{
      return todo.sno===sno
      ?{...todo,ticked:!todo.ticked}
      :todo;}
      
    );
    setTodos(updatedTodos);
  }
  let initHabit;
  if(localStorage.getItem("habits")===null){
    initHabit = [];
  }
  else{
    initHabit=JSON.parse(localStorage.getItem("habits"));
  }
  const onDeleteHabit=(habit)=>{
    console.log("I am onDelete",habit);
    setHabits(habits.filter((e)=>{
      return e!==habit;
    }));
  }
  const addHabit=(title)=>{
    console.log("I am adding this habit",title);
    let sno;
    if(habits.length===0){
      sno=0;
    }
    else{
      sno=habits[habits.length-1].sno+1;
    }
    const myHabit={sno: sno,title: title};
    setHabits([...habits,myHabit]);
    console.log(myHabit);
  }
  const [habits,setHabits]=useState(initHabit);
  useEffect(()=>{localStorage.setItem("habits",JSON.stringify(habits));},[habits]);

  let initGoal;
  if(localStorage.getItem("goals")===null){
    initGoal = [];
  }
  else{
    initGoal=JSON.parse(localStorage.getItem("goals"));
  }
  const onDeleteGoal=(goal)=>{
    console.log("I am onDelete",goal);
    setGoals(goals.filter((e)=>{
      return e!==goal;
    }));
  }
  const addGoal=(title)=>{
    console.log("I am adding this goal",title);
    let sno;
    if(goals.length===0){
      sno=0;
    }
    else{
      sno=goals[goals.length-1].sno+1;
    }
    const myGoal={sno: sno,title: title};
    setGoals([...goals,myGoal]);
    console.log(myGoal);
  }
  const [goals,setGoals]=useState(initGoal);
  useEffect(()=>{localStorage.setItem("goals",JSON.stringify(goals));},[goals]);
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        
          
          <Routes>
            <Route path="/" element={<>
                                     <div style={oneStyle}>
                                       <Sidebar/>
                                       <DashboardCard/>
                                     </div>
                                    </>}
            />
            
            <Route path="/addtasks" element={<>
                                           <div style={oneStyle}>
                                             <Sidebar/>
                                             <div style={{display:"flex", marginLeft:"100px"}}>
                                                <Link to="/tasks" style={{color:"black", marginTop:"20px"}}><div style={{paddingTop:"10px"}}><i className="fa-solid fa-arrow-left"></i></div></Link>
                                                <AddTodo addTodo={addTodo}/>
                                                <Todos todos={todos} onDelete={onDelete}/>
                                             </div>
                                           </div>
                                    </>}
            />
            <Route path="/journal" element={<>
                                              <div style={oneStyle}>
                                              <Sidebar/>
                                              <Journal journals={journals} onDeleteJournal={onDeleteJournal} onEditJournal={setJournals}/>
                                              </div>
                                            </>}                          
            />
            <Route path="/tasks" element={<>
                                              <div style={oneStyle}>
                                              <Sidebar/>
                                              <Tasks todos={todos} toggleTodo={toggleTodo}/>
                                              </div>
                                            </>}                          
            />
            <Route path="/goals" element={<>
                                              <div style={oneStyle}>
                                              <Sidebar/>
                                              <Goals goals={goals} onDeleteGoal={onDeleteGoal}/>
                                              </div>
                                            </>}                          
            />
            <Route path="/habits" element={<>
                                              <div style={oneStyle}>
                                              <Sidebar/>
                                              <Habits habits={habits} onDeleteHabit={onDeleteHabit}/>
                                              </div>
                                            </>}                          
            />
            <Route path="/Mood" element={<>
                                              <div style={oneStyle}>
                                              <Sidebar/>
                                              <Mood/>
                                              </div>
                                            </>}                          
            />
            <Route path="/ai-insight" element={<>
                                              <div style={oneStyle}>
                                              <Sidebar/>
                                              <AIInsight/>
                                              </div>
                                            </>}                          
            />
            <Route path="/addjournal" element={<>
                                              <div style={oneStyle}>
                                              <Sidebar/>
                                              <AddJournal addJournal={addJournal}/>
                                              </div>
                                            </>}                          
            />
            <Route path="/addhabit" element={<>
                                              <div style={oneStyle}>
                                              <Sidebar/>
                                              <AddHabit addHabit={addHabit}/>
                                              </div>
                                            </>}                          
            />
            <Route path="/addgoal" element={<>
                                              <div style={oneStyle}>
                                              <Sidebar/>
                                              <AddGoal addGoal={addGoal}/>
                                              </div>
                                            </>}                          
            />
          </Routes>
      </BrowserRouter>
        
      
    </>
  );
}

export default App
