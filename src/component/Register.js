import React, { Component } from 'react';
import '../Login.css';

class Register extends Component {
   render() {
      return (
			<div id="loginbox" className="mainbox col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3"> 
		        <div className="row">                
		            <div className="iconmelon">
		            </div>
		        </div>		        
		        <div className="panel panel-default" >
		            <div className="panel-heading">
		                <div className="panel-title text-center">React App : Register Form</div>
		            </div>     
		            <div className="panel-body" >
		                <form onSubmit={this.submitRegister.bind(this)} name="form" id="form" className="form-horizontal">		    
		                    <div className="input-group">
		                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
		                        <input ref='username' id="user" type="text" className="form-control" name="user" placeholder="Username"/>                                        
		                    </div>
		                    <div className="input-group">
		                        <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
		                        <input ref='email' id="user" type="email" className="form-control" name="email" placeholder="Email"/>                                        
		                    </div>
		                    <div className="input-group">
		                        <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
		                        <input ref='password' id="password" type="password" className="form-control" name="password" placeholder="Password"/>
		                    </div>   
		                    <div className="input-group">
		                        <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
		                        <input ref='confirm_password' id="password" type="password" className="form-control" name="confirm_password" placeholder="Confirm Password"/>
		                    </div>                                                                
		                    <div className="form-group">
		                        <div className="col-sm-12 controls">
		                            <button type="submit" href="#" className="btn btn-primary pull-right"><i className="glyphicon glyphicon-log-in"></i> Register</button>                          
		                        </div>
		                    </div>
		                </form>     
		            </div>                     
		        </div>  
		    </div>
      )
   }

   submitRegister(e){
   		e.preventDefault();
   		if(this.refs.confirm_password.value === '' || this.refs.password.value === '' || this.refs.username.value === '' || this.refs.email.value === ''){
   			alert('All fields are required');return;
   		}

   		if(this.refs.password.value !== this.refs.confirm_password.value){
   			alert('password and confirm password should be equal');return;
   		}
   		var user = {
   			username:this.refs.username.value,
   			email:this.refs.email.value,
   			password:this.refs.password.value
   		}
   		console.log(user);
   }
}

export default Register;