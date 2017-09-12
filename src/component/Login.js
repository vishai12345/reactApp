import React, { Component } from 'react';
import '../Login.css';

class Login extends Component {
   render() {
      return (
      		<div id="loginbox" className="mainbox col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3"> 
		        <div className="row">                
		            <div className="iconmelon">
		            </div>
		        </div>		        
		        <div className="panel panel-default" >
		            <div className="panel-heading">
		                <div className="panel-title text-center">React App : Login Form</div>
		            </div>     
		            <div className="panel-body" >
		                <form onSubmit={this.submitLogin.bind(this)} name="form" id="form" className="form-horizontal">		    
		                    <div className="input-group">
		                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
		                        <input ref='username' id="user" type="text" className="form-control" name="user" placeholder="Username"/>                                        
		                    </div>
		                    <div className="input-group">
		                        <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
		                        <input ref='password' id="password" type="password" className="form-control" name="password" placeholder="Password"/>
		                    </div>                                                                   
		                    <div className="form-group">
		                        <div className="col-sm-12 controls">
		                            <button type="submit" href="#" className="btn btn-primary pull-right"><i className="glyphicon glyphicon-log-in"></i> Log in</button>                          
		                        </div>
		                    </div>
		                </form>     
		            </div>                     
		        </div>  
		    </div>
      )
   }

   submitLogin(e){
   		e.preventDefault();
   		console.log(this.refs.username.value,this.refs.password.value)
   }
}

export default Login;