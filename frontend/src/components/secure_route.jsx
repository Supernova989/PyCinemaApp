import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


function SecureRoute({path, component}) {
	class ProtectedComponent extends Component {
		render() {
			if (this.props.auth.token) {
				const C = component;
				return <Route path={path} component={() => <C/>}/>
			}
			return <Redirect path={path} to='/login'/>
		}
	}
	
	const PC = connect(mapStateToProps)(ProtectedComponent);
	return <PC/>;
}

SecureRoute.propTypes = {
	path: PropTypes.string.isRequired,
	component: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
	return {
		auth: state.auth
	};
}

export default SecureRoute;
