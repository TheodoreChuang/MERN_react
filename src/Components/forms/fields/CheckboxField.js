import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
// import Favorite from '@material-ui/icons/Favorite';
// import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const styles = {
  root: {
    color: green[600],
    "&$checked": {
      color: green[500]
    }
  },
  checked: {}
};

class CheckboxLabels extends Component {
  handleChange = name => event => {
    const { onChange } = this.props.input;
    onChange(event.target.checked);
  };

  render() {
    console.log(this.props);
    const { classes, input, meta, ...other } = this.props;
    const { onChange, value, ...otherInput } = input;

    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              {...otherInput}
              {...other}
              value={value ? "checked" : ""}
              checked={value}
              onChange={this.handleChange("checked")}
            />
          }
          label={
            <div>
              <span>I have read and agreed to the </span>
              <Link to="/termsandconditions">Terms and Conditions</Link>
              <div> {meta.touched && meta.error} </div>
            </div>
          }
        />
      </FormGroup>
    );
  }
}

CheckboxLabels.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CheckboxLabels);
