import React from 'react'

const TaskItem = props =>{
  console.log(props)
  return(
    <li>
        <div >
          <label>
            {props.data.title}
          </label>
          <button onClick = {()=>props.delfunc(props.data.id)} className ="del-item">Delete</button>
        </div>
      </li>
      )
}
 
  
  

const TaskList = props =>
  <ul className="task-list">
    {props.todos.map(todo => <TaskItem delfunc = {props.onClick} data = {todo}  />)}
  </ul>

export default TaskList