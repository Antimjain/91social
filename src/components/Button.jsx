import React from 'react';
import { Button, withStyles } from '@material-ui/core';

const buttonStyles = {
  button: {
    minHeight: 'auto',
    minWidth: 'auto',
    whiteSpace: 'nowrap',
  },
};

const CustomButton = props => {
  const { classes, children, className, ...rest } = props;
  return (
    <Button
    variant="contained"
    color="primary"
    className={classes.button+' '+className}
    {...rest}
    >
      {children}
    </Button>
  );
}

export default withStyles(buttonStyles)(CustomButton);