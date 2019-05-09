import React, { Component } from 'react';
import '../header.css'
import { Link } from 'react-router';

class Header extends Component {
   render() {
      return (
			<nav className="navbar navbar-inverse">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <Link to='/home' className="navbar-brand">WebSiteName</Link>
			    </div>
			    <ul className="nav navbar-nav">
			      <li><Link to='/todo'>Todo</Link></li>
			    </ul>
			    <ul className="nav navbar-nav navbar-right">
			      <li><Link to='/register'><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
			      <li><Link to='/login'><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
			    </ul>
			  </div>
			</nav>
      )
   }
}

export default Header;