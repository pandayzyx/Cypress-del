import React from 'react'

const TaskForm = props =>
  <form onSubmit = {props.onSubmit}>
    <input
      type='text'
      onChange  = {props.onChange}
      value = {props.value}
      autoFocus
      className="p-2 rounded border task-input"
      placeholder="Add something?"/>
      <button className  = "btn btn-danger">Click</button>
  </form>

  export default TaskForm