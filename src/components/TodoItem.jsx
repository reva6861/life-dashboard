import React from 'react'

const TodoItem = ({todo,onDelete}) => {
  let todoitemStyle={
    marginLeft:"50px",
    width:"400px"
  }
  return (
    <div style={todoitemStyle}>
      <h5>{todo.title}</h5>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
      <br></br><br></br>
    </div>
  )
}

export default TodoItem
