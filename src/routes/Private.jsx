import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, isLoggedIn, ...rest}) => {
	return (
		<Route
			{...rest}
			render={props => {
				return isLoggedIn === true ? <Component {...props} /> : <Redirect to={{pathname: '/login', state: {from: props.location}}} />
			}}
		/>
	);
};

const mapStateToProps = state => ({...state.authReducers});
export default connect(mapStateToProps,)(PrivateRoute);