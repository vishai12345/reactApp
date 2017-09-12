import React, { Component } from 'react';

class Todo extends Component {
  render() {
  	let todolist;
  	if(this.props.todolist){
  		todolist = this.props.todolist.map((todo,index) => {
  			return (
  					<ul key={index}>
  						<li><span onClick={this.editTodo.bind(this,todo)}>{todo.title} <b>:-></b> {todo.body}</span> : <span className='btn btn-link glyphicon glyphicon-trash' onClick={this.deleteTodo.bind(this,todo)}></span></li>
  					</ul>
  				);
  		})
  	}

    return (
        <div className='col-md-6'>
        	<h1>{this.props.header}</h1>
        	<div className='well'>
            {todolist}
          </div>
        </div>
    );
  }

  deleteTodo(todo){
    this.props.deleteTodo(todo);
  }

  editTodo(todo){
    this.props.editTodoList(todo);
  }
}

export default Todo;
