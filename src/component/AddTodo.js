import React, { Component } from 'react';
import uuid from 'uuid';

class AddTodo extends Component {

	constructor(){
		super();
		this.state = {
			newTodo:{}
		}
	}	

  render() {
    return (
        <div className='col-md-6'>
        	<h1>{this.props.header}</h1>
        	<div className='well'>
            <form onSubmit={this.submitForm.bind(this)}>
              <input value={this.props.id} type='hidden' ref='id'/>
              <div className='form-group'>
                <label>Title</label><br/>
                <input  className='form-control' ref='title'/>
              </div>
              <div className='form-group'>
                <label>Description</label><br/>
                <input  className='form-control' ref='body'/>
              </div>
              <input className='btn' type='submit' value='Submit'/>
            </form>
          </div>
        </div>
    );
  }

  submitForm(e){
  		e.preventDefault();
  		if(this.refs.id.value === ''){
        if(this.refs.title.value === '' && this.refs.body.value === ''){
          alert('All fields are required'); return;
        }else{
          this.setState({
            newTodo:{
              id:uuid.v4(),
              title:this.refs.title.value,
              body:this.refs.body.value
            }
          },function(){
            this.props.addNewTodo(this.state.newTodo);
            this.refs.title.value = '';
            this.refs.body.value = '';
            return;
          });
        }
      }else{
        this.setState({
            newTodo:{
              id:this.refs.id.value,
              title:this.refs.title.value,
              body:this.refs.body.value
            }
          },function(){
            this.props.updateTodo(this.state.newTodo);
            this.refs.title.value = '';
            this.refs.id.value = '';
            this.refs.body.value = '';
            return;
          });
      }
  }
}

export default AddTodo;
