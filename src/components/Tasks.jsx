import React from 'react'
import {Link} from "react-router-dom"
import {useState} from "react"

export default function Tasks(props) {
  const[selected,setSelected]=useState("All");
  const[search,setSearch]=useState("");
  const pendingTodos=props.todos.filter((todo)=>!todo.ticked);
  const completedTodos=props.todos.filter((todo)=>todo.ticked);
  let myTodos;
  if(selected==="All"){
    myTodos=props.todos;
  }
  else if(selected==="Pending"){
    myTodos=pendingTodos;
  }
  else if(selected==="Completed"){
    myTodos=completedTodos;
  }
  localStorage.setItem("pendingTodos",JSON.stringify(pendingTodos));
  console.log(pendingTodos);
  localStorage.setItem("totalTodos",JSON.stringify(props.todos.length));
  localStorage.setItem("completedTodos",JSON.stringify(completedTodos.length));
  const searchedTodos=myTodos.filter((todo)=>todo.title.toLowerCase().includes(search.toLowerCase()));
  
  return (
    <div style={{ marginLeft: "50px"}}>
      <br></br>
      <div style={{width:"500px", height:"70px"}}>
        <div>
          <div style={{ fontSize: "25px", height: "10px"}}>
            <b>Tasks</b>
          </div>
          <br></br>Manage your tasks and stay productive.
        </div>
        <div style={{ marginLeft: "600px", width:"200px"}}>
          <Link to="/addtasks">
            <button
              style={{
                backgroundColor: "rgb(129, 52, 211)",
                color: "white",
                border: "none",
                fontSize: "15px",
                padding: "5px",
                borderRadius: "8px",
              }}
            >
              + New Task
            </button>
          </Link>
        </div>
      </div>
      <br></br>
      <ul className="nav nav-underline">
        <li className="nav-item" onClick={()=>setSelected("All")}>
          <a className={`nav-link ${selected==="All" ? "active":"" }`}aria-current="page" href="#">
            All
          </a>
        </li>
        <li className="nav-item" onClick={()=>setSelected("Pending")}>
          <a className="nav-link" href="#">
            Pending
          </a>
        </li>
        <li className="nav-item" onClick={()=>setSelected("Completed")}>
          <a className="nav-link" href="#">
            Completed
          </a>
        </li>
        <li style={{ marginLeft: "300px", marginTop: "10px" }}>
          <a>
            <input type="text" placeholder="Search tasks..." onChange={(e)=>setSearch(e.target.value)} />
            <button>Search</button>
          </a>
        </li>
        
      </ul>
      <br></br>
      
       {searchedTodos.map((todo)=>(<div key={todo.sno}>
         <div className="input-group mb-3">
             <div className="input-group-text">
                 <input
                    className="form-check-input mt-0"
                    type="checkbox"
                    value=""
                    aria-label="Checkbox for following text input"
                    checked={todo.ticked}
                    onChange={()=>{props.toggleTodo(todo.sno)}}
                 />
             </div>
        
             <textarea
                 type="text"
                 className="form-control"
                 aria-label="Text input with checkbox"
                 value={`${todo.title}\n${todo.desc}`}
                 readOnly
             />
          
        </div>
      </div>))}
      
    </div>
  );
}
