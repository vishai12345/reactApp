import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoContent from './component/TodoContent';
import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router';

var app = document.getElementById('root');
ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			 <Route path = "/home" component = {Home} />
			 <Route path = "todo" component = {TodoContent} />
	         <Route path = "login" component = {Login} />
	         <Route path = "register" component = {Register} />
		</Route>
	</Router>, app);
registerServiceWorker();
