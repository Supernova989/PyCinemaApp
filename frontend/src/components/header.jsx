import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {log_out} from "../actions";


class Header extends Component {
	
	onSingOutClick = () => {
		this.props.dispatch(log_out());
	};
	
	onSingInClick = () => {
		this.props.history.push('/login');
	};
	
	render() {
		return (
			<Container>
				<Row>
					<Col sm={12}>
						<header id='header' className='clearfix'>
							<div className='app-title'>
								<b>PyCinema</b>
							</div>
							<div className='buttons'>
								<Button variant='link' onClick={this.onSingInClick}>Sing In</Button>
								<Button variant='primary' onClick={this.onSingOutClick}>Sign Up</Button>
							</div>
						</header>
					
					</Col>
				
				</Row>
				
				<Navbar expand="md">
					
					<Navbar.Toggle aria-controls="basic-navbar-nav"/>
					
					<Navbar.Collapse id="basic-navbar-nav">
						
						<Nav className="mr-auto">
							<li className="nav-item active">
								<NavLink to='/'>Home</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to='/movies'>Movies</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to='/schedule'>Schedule</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to='/soon'>Coming Soon</NavLink>
							</li>
						
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			
			</Container>
		)
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth
	};
}

export default connect(mapStateToProps)(withRouter(Header));
