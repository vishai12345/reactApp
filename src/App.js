import React, { Component } from 'react';
import Header from './component/Header'
import Footer from './component/Footer'
import Login from './component/Login';
import Register from './component/Register';

class App extends Component {
	constructor(){
		super();	
	}

	render() {
		return (
		  <div className="App">
		  	<Header/>
		  		<div className='container'>
			    	{this.props.children}
		  		</div>
		    <Footer />
		  </div>
		);
	}
}

export default App;
