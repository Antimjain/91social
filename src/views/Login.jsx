import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LockRounded from '@material-ui/icons/LockRounded';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import { authActions } from '../actions/authActions';

const loginStyle = {
	paper: {
		marginTop: 10,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		border: '1px solid #ccc',
		padding: 20,
	},
	avatar: {
		margin: 10,
		backgroundColor: '#fff',
	},
	form: {
		width: '100%',
		marginTop: 3,
	},
	submit: {
		margin: 3,
	},
};

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			isSubmit: false,
			from: props.location.state && props.location.state.from && props.location.state.from.pathname ? props.location.state.from.pathname : '/',
		};
	}

	handleOnChange = event => {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value
		});
	};
	
	handleSubmit = event => {
		event.preventDefault();
		const {username, password} = this.state;
		this.props.doLogin(username, password);
	};

	componentDidMount() {
		const { isLoggedIn, history } = this.props;
		if(isLoggedIn) {
			history.push('/');
		}
	}

	componentDidUpdate() {
		const { isLoggedIn, history } = this.props;
		if(!isLoggedIn) {
			return;
		}
		if (this.state.from ) {
			history.push(this.state.from || '/');
		}
	}
	
	render () {
		const { classes } = this.props;
		return (
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div className={classes.paper}>
						<Avatar className={classes.avatar}>
							<LockRounded color="primary" classes={classes.avatar} />
						</Avatar>
						<Typography component="h1" variant="h5">
							Login
						</Typography>
						<form className={classes.form} novalidate onSubmit={this.handleSubmit}>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<Input
										name="username"
										fullWidth
										label="Username"
										autoFocus
										onChange={this.handleOnChange}
										value={this.state.username}
									/>
								</Grid>
								<Grid item xs={12}>
									<Input
										fullWidth
										name="password"
										label="Password"
										type="password"
										onChange={this.handleOnChange}
										value={this.state.password}
									/>
								</Grid>
								<Grid item xs={12}>
									<Button
										type="submit"
										fullWidth
										className={classes.submit}
									>
										Login
									</Button>
								</Grid>
							</Grid>
						</form>
					</div>
			</Container>
		);
	}
}

const mapStateToProps = state => ({...state.authReducers});
const mapDispatchToProps = dispatch => ({
	doLogin: (username, password) => dispatch(authActions.doLogin(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(loginStyle)(Login));