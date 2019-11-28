import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

function Header({user, ...rest}) {
	const classes = useStyles();
	const title = Object.keys(user).length > 0 ? `${user.firstName} ${user.lastName} (${user.role})`: '';
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" color="primary" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            {title}
          </Typography>
          <nav>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/login" className={classes.link}>
              Login
            </Link>
            <Link to="/dashboard" className={classes.link}>
              Dashboard
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({...state.authReducers});

export default connect(mapStateToProps)(Header);