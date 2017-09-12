import React, { Component } from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';
import axios from 'axios';

class TodoContent extends Component {
	constructor(){
		super();
		this.state = {
			id:'',
			title:'',
			body:'',
			header:'',
			todoList : []
		}
	}

	componentWillMount(){
		axios.get(`https://jsonplaceholder.typicode.com/posts`)
	      .then(res => {
	        //console.log(res.data);
	        //localStorage.setItem('todo', JSON.stringify(res.data));
	      });
		var todoList = JSON.parse(localStorage.getItem('todo'));
		if(todoList === null){
			todoList = [];
		}
		this.setState({todoList:todoList});
	}

	addNewTodo(addNewTodo){
		let existTodo = this.state.todoList;
		existTodo.push(addNewTodo);
		localStorage.setItem('todo', JSON.stringify(existTodo));
		this.setState({todoList:existTodo});
	}

	deleteTodo(todo){
		if (todo.id === this.state.id) {
			this.setState({id:'',title:'',body:''});
		};
		let existTodo = this.state.todoList;
		for (var i = 0 ; i < existTodo.length ; i++) {
			if(existTodo[i].id === todo.id){
				existTodo.splice(i, 1);
				localStorage.setItem('todo', JSON.stringify(existTodo));
				this.setState({todoList:existTodo});	
			}
		};		
	}

	editTodo(todo){
		this.setState({id:todo.id,title:todo.title,body:todo.body});
	}

	updateTodo(todo){
		let existTodo = this.state.todoList;
		for (var i = 0 ; i < existTodo.length ; i++) {
			if(existTodo[i].id === todo.id){
				existTodo[i].title = todo.title;
				existTodo[i].body = todo.body;
				this.setState({todoList:existTodo});
				localStorage.setItem('todo', JSON.stringify(existTodo));
				return ;	
			}
		};
	}

   render() {
      return (
			<div>
				<AddTodo  updateTodo={this.updateTodo.bind(this)} {...this.state} header='Here You can add Todo Item' addNewTodo={this.addNewTodo.bind(this)}/>
    			<Todo {...this.state} editTodoList={this.editTodo.bind(this)} header='Here You can show Todo Item' todolist={this.state.todoList} deleteTodo={this.deleteTodo.bind(this)}/>
			</div>
      )
   }
}

export default TodoContent;