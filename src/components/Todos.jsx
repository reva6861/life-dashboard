import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
  return (
    <div className="container">
      <br></br>
      <div style={{marginLeft:"200px"}}><u><h3>Todos List</h3></u></div>
      <br></br>
      {props.todos.length===0?"No todos to display":
      props.todos.map((todo)=>{
        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      })
      }
      
      
    </div>
  )
}

export default Todos
