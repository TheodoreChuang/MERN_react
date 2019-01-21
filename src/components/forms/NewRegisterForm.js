import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import CheckboxLabels from './../components/Checkbox'
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';



const styles = theme => ({
  container: {
    display: 'flex',
    width: '70%',
    margin: '50px auto 0 auto',
    position: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    margin: theme.spacing.unit,
    padding: '6px 0',
  },
  margin: {
    // margin: '0 200px',
    width: '200px',
  },
  checkbox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '10px',
    maxWidth: '360px',
    alignItems: 'center',
  },
  checkboxButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signin: {
    margin: '10px',
    padding: '20px',
  },
});

function NewRegister(props) {
  const { classes } = props;
  
  return (
    <div className={classes.container}>
      <Input
        placeholder="First Name"
        className={classes.input}
        fullWidth
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <Input
        placeholder="Last Name"
        className={classes.input}
        fullWidth
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <Input
        placeholder="Nick Name"
        className={classes.input}
        fullWidth
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <Input
        placeholder="Email"
        className={classes.input}
        fullWidth
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <Input
        placeholder="Password"
        className={classes.input}
        fullWidth
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <div className={classes.checkboxButton} >
      <div className={classes.checkbox}>
        <CheckboxLabels />
      </div>
      <div>
      <Fab variant="extended" color="primary" aria-label="Add" className={classes.margin}>
          Submit
      </Fab>
      </div>
      <div className={classes.signin}> 
      <Typography>Already have an accout? <Link>Sign in</Link></Typography>
      </div>
      </div>
    </div>
  );
}

NewRegister.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewRegister);