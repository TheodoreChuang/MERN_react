import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});


function DatePickers(props) {
  const { classes, label, meta: {touched, error}, input } = props;
  const { value, ...otherInput } = input;
  
  return (
    <div className={classes.container} noValidate>
      <TextField
        {...otherInput}
        id="date"
        label={label}
        type="date"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
                <div
          style={{color:"red", marginLeft: "10px"}}> 
            {touched && error} </div>
    </div>
  );
}

DatePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePickers);
