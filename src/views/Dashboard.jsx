import React, { Component } from "react";
import { shipActions } from '../actions/shipActions';
import { connect } from 'react-redux';
import Card from '../components/Card';
import Container from '@material-ui/core/Container';
import {
  Grid,
  Typography,
  CssBaseline,
} from '@material-ui/core';

class Dashboard extends Component {

  componentDidMount() {
    this.props.getShipsTypes();
  }

  handleMore = event => {
    console.log('handle more ...', event); 
  }

	render() {
    const { shipTypes } = this.props;
    return (
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Typography component="h1" color="primary" variant="h5">
          Ship Types
        </Typography>
        <Grid container spacing={2}>
        {shipTypes && Object.keys(shipTypes).map(shipType => {
          return (
            <Grid item xs key={shipType}>
              <Card
                title={shipType}
                count={shipTypes[shipType]}
                onMore={this.handleMore}
              />
            </Grid>
          );
        })}
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => ({...state.shipReducers});
const mapDispatchToProps = dispatch => ({
  getShipsTypes: () => dispatch( shipActions.getShipsTypes() ),
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);