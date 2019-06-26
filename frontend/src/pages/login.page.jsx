import React, {Component} from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import {log_in} from '../actions';

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}
	
	onInput = (event) => {
		const {name, value} = event.target;
		this.setState({[name]: value});
	};
	
	onSubmit = (event) => {
		event.preventDefault();
		this.props.dispatch(log_in(this.state.email,this.state.password));
	};
	
	render() {
		return (
			<>
				<h1>Login page</h1>
				{/*<Form onSubmit={this.onSubmit} autoComplete='off'>*/}
				{/*	<Form.Group controlId="email">*/}
				{/*		<Form.Label>Email</Form.Label>*/}
				{/*		<Form.Control type="email"*/}
				{/*					  placeholder="Enter email"*/}
				{/*					  value={this.state.email}*/}
				{/*					  name='email'*/}
				{/*					  onChange={this.onInput}*/}
				{/*		/>*/}
				{/*		<Form.Text className="text-muted">*/}
				{/*			We'll never share your email with anyone else.*/}
				{/*		</Form.Text>*/}
				{/*	</Form.Group>*/}
				{/*	*/}
				{/*	<Form.Group controlId="password">*/}
				{/*		<Form.Label>Password</Form.Label>*/}
				{/*		<Form.Control type="password"*/}
				{/*					  placeholder="Password"*/}
				{/*					  value={this.state.password}*/}
				{/*					  name='password'*/}
				{/*					  onChange={this.onInput}*/}
				{/*		/>*/}
				{/*	</Form.Group>*/}
				{/*	*/}
				{/*	<Button variant="primary" type="submit">*/}
				{/*		Submit*/}
				{/*	</Button>*/}
				{/*</Form>*/}
			</>
		)
	}
}

export default connect()(LoginPage);
