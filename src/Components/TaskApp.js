import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import {loadData} from "../utils/axios"
import { v4 as uuidv4 } from 'uuid';


export default class TodoApp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [],
           itemValue: "",
		};
  }
  componentDidMount(){
	  loadData().then(res=>res.data)
	  .then(res=>this.setState({todos:[...res]}))
  }
  handleChange  =  (e)=>{
	  this.setState({itemValue:e.target.value})
  }
  handleSubmit =(e)=>{
   e.preventDefault()
   let {itemValue}  =  this.state
   let item  = {
	   title:itemValue,
	   id:uuidv4(),
	   status:false
   }
   this.setState({
	   todos:[...this.state.todos,item]
   })
   }
   handleDelete = (id)=>{
	let {todos} =  this.state
	console.log(id)
   let data = todos.filter(item=>item.id===id?null:item) 
   this.setState({todos:data})
   
  }
 
	

	render() {
		console.log(this.state.todos)
		return (
			<Router>
				<div className="container-fluid text-center">
					<header className="p-2">
						<h1>Tasks</h1>
						<TaskForm
							onSubmit={this.handleSubmit}
							onChange={this.handleChange}
							value={this.state.itemValue}
						/>
					</header>
					<section className="mt-2">
						<TaskList onClick = {this.handleDelete} todos={this.state.todos} />
					</section>
				</div>
			</Router>
		);
	}
}
