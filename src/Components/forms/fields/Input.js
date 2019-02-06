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
    margin: "theme.spacing.unit",
    borderBottom: "2px solid white"
  }
});

class Inputs extends Component {
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
          style={{ margin: "5px"}}
          {...other}
          {...otherInput}
          className={classes.input}
          value={other.type === "file" ? current : value}
          onChange={this.onChange}
        />
        <div style={{ color: "red", marginLeft: "10px" }}>
          {touched && error}{" "}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Inputs);
