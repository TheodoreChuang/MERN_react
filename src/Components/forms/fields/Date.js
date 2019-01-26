import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import getDateToday from "./DateHelper";

console.log("line 7");
getDateToday();

const styles = theme => ({
  container: {
    display: 'flex',
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
  console.log(props);
  return (
    <div className={classes.container} noValidate>
      <TextField
        {...otherInput}
        defaultValue={getDateToday()}
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
