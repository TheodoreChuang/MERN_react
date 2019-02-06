import React, { Component } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  buttonText: {
    color: theme.palette.primary.contrastText
  }
});

class FormDialog extends Component {
  state = {
    open: false,
    email: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = event => {
    this.setState({ email: event.target.value });
  };

  render() {
    const {
      buttonText,
      header,
      content,
      submitButtonText,
      action,
      classes
    } = this.props;

    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
          style={{
            border: "none",
            backgroundColor: "transparent",
            textTransform: "none"
          }}
        >
          <Typography variant="caption" className={classes.buttonText}>
            {buttonText}
          </Typography>
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{header}</DialogTitle>
          <DialogContent>
            <DialogContentText>{content}</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              name="email"
              onChange={this.handleChange}
              style={{
                width: "100%"
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                action(this.state.email);
                this.handleClose();
              }}
              color="primary"
            >
              {submitButtonText}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(FormDialog);
