import React, {Component} from 'react';
import Header from './components/header';
import {Switch, Route} from 'react-router-dom';
import SecureRoute from './components/secure_route';


class App extends Component {
	render() {
		return (
			<div className="wrapper">
				<Header/>
				<Switch>
					<Route exact path='/'/>
					<Route path='/movies'
						   component={() => {return (<div>Movies</div>)}}/>
					<Route path='/schedule'
						   component={() => {return (<div>Schedule</div>)}}/>
					<Route path='/soon'
						   component={() => {return (<div>Coming soon</div>)}}/>
					<Route path='/login'
						   component={() => {return (<div>Login</div>)}}/>
					<SecureRoute path='/profile' component={() => <ProfilePage />}/>
					<Route  component={() => {return (<div>404</div>)}}/>
				</Switch>
			</div>
		);
	}
}

function ProfilePage() {
	return (
		<div>Profile</div>
	);
}

export default App;
