import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {NavLink, Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import i18n from '../translation';
import { withTranslation } from 'react-i18next';
import {log_out} from '../actions';


class Header extends Component {
	
	onSingOutClick = () => {
		this.props.dispatch(log_out());
	};
	
	onSingInClick = () => {
		this.props.history.push('/login');
	};
	
	render() {
		
		const {t, i18n} = this.props;
		return (
			<Container fluid>
				<Row>
					<Col sm={12}>
						<header id='header' className='clearfix'>
							<div className='app-title'>
								<b>PyCinema</b>
							</div>
							<div className='buttons'>
								<Button variant='link' onClick={this.onSingInClick}>
									{t('COMMON.SIGN_IN')}
								</Button>
								<Button variant='primary' onClick={this.onSingOutClick}>
									{t('COMMON.SIGN_UP')}
								</Button>
							</div>
						</header>
					
					</Col>
				
				</Row>
				
				<Navbar expand="md">
					
					<Navbar.Toggle aria-controls="basic-navbar-nav"/>
					
					<Navbar.Collapse id="basic-navbar-nav">
						
						<Nav className="mr-auto" id='navigation'>
							<li className="nav-item">
								<Link to='/'>{t('NAVIGATION.INDEX')}</Link>
							</li>
							<li className="nav-item">
								<NavLink to='/movies'>{t('NAVIGATION.MOVIES')}</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to='/schedule'>{t('NAVIGATION.SCHEDULE')}</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to='/soon'>{t('NAVIGATION.COMING_SOON')}</NavLink>
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

export default connect(mapStateToProps)(withRouter(withTranslation()(Header)));
