import React from 'react';
import {NavLink, Link, withRouter} from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';
import {connect} from 'react-redux';
import i18n from '../translation';
import {withTranslation} from 'react-i18next';
import {log_out} from '../actions';


class Header extends React.Component {
	
	onSingOutClick = () => {
		this.props.dispatch(log_out());
	};
	
	onSingInClick = () => {
		this.props.history.push('/login');
	};
	
	render() {
		
		const {t, i18n} = this.props;
		return (
			<header id='header' className='clearfix'>
				
				<Container fluid={true}>
					<Row>
						<Col sm={12}>
							<div className='app-title'>
								<b>AMC Theater</b>
							</div>
						</Col>
					</Row>
				</Container>
				<Container className='inner'>
					
					<Row>
						<Col sm={12}>
							<ul>
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
							</ul>
						</Col>
					</Row>
				</Container>
				
				
				{/*<div className='buttons'>*/}
				{/*	<Button variant='link' onClick={this.onSingInClick}>*/}
				{/*		{t('COMMON.SIGN_IN')}*/}
				{/*	</Button>*/}
				{/*	<Button variant='primary' onClick={this.onSingOutClick}>*/}
				{/*		{t('COMMON.SIGN_UP')}*/}
				{/*	</Button>*/}
				{/*</div>*/}
			</header>
		)
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth
	};
}

export default connect(mapStateToProps)(withRouter(withTranslation()(Header)));
