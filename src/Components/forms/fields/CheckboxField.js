import React, { Component } from "react";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  withStyles
} from "@material-ui/core/";

const styles = {
  font: {
    color: "white"
  },
  checked: {}
};

class CheckboxLabels extends Component {
  handleChange = name => event => {
    const { onChange } = this.props.input;
    onChange(event.target.checked);
  };

  render() {
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
              <span className={classes.font}>
                I have read and agree to the{" "}
              </span>
              {/* <div> {meta.touched && meta.error} </div> */}
            </div>
          }
        />
      </FormGroup>
    );
  }
}

export default withStyles(styles)(CheckboxLabels);
