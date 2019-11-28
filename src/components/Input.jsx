import React from 'react';
import {
  TextField, 
  withStyles,
} from '@material-ui/core';

const inputStyles = {
  inputRoot: {
    margin: 0,
  }
};

const CustomInput = props => {
  const { classes, ...rest } = props;
  return (
    <TextField
      variant="outlined"
      margin="dense"
      {...rest}
      className={classes.inputRoot}
    />
  );
};

export default withStyles(inputStyles)(CustomInput);