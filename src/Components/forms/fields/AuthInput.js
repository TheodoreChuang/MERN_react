import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  input: {
    margin: theme.spacing.unit,
    color: theme.palette.primary.contrastText,
    borderBottom: `2px solid ${theme.palette.primary.contrastText}`
  },
  error: {
    color: theme.palette.primary.light,
    marginLeft: "10px"
  }
});

class AuthInputs extends Component {
  state = { current: "" };

  onChange = event => {
    const {
      input: { onChange },
      type
    } = this.props;
    let value = event.target.value;

    if (type === "file") {
      this.setState({ current: value });
      value = event.target.files[0];
    }

    onChange(value);
  };

  render() {
    // Props are coming off redux form
    const {
      classes,
      meta: { touched, error },
      input,
      ...other
    } = this.props;
    const { value, onChange, ...otherInput } = input;
    const { current } = this.state;

    return (
      <div className={classes.container}>
        <Input
          {...other}
          {...otherInput}
          className={classes.input}
          value={other.type === "file" ? current : value}
          onChange={this.onChange}
        />
        <div className={classes.error}>{touched && error}</div>
      </div>
    );
  }
}

export default withStyles(styles)(AuthInputs);
