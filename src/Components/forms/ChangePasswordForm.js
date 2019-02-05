import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import LocalApi from "./../../apis/local";
import { withRouter } from "react-router-dom";
import Input from "./fields/Input";
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';
import LockOutlined from "@material-ui/icons/LockOutlined";
import { connect } from "react-redux";
import { Card, withStyles } from "@material-ui/core/";

const styles = theme => ({
    container: {
      minWidth: 235,
      maxWidth: 560,
      padding: theme.spacing.unit * 2
    }
})

class ChangePasswordForm extends Component {

    onFormSubmit = (formValues) => {
        const { history, email } = this.props;
        const { password, new_password, confirm_password } = formValues;
       
        if (new_password !== confirm_password) {
            return swal(":(", "Passwords did not match!", "error", {
                button: false,
                timer: 2000
            });
        };

        LocalApi.put(`/changepassword`, {password, new_password, email})
        .then(res => {
            if (res.status === 200) {
                    swal("Success!", "Password updated!", "success", {
                      button: false,
                      timer: 2000
                    });
                    setTimeout(() => history.push("/"), 2000);
                };
            })
        .catch(err => {
            this.setState({ error: true });
                return swal(":(", err, "error");
            });
    };

    render() {
        const { handleSubmit, classes } = this.props;

        return (
            // <div style={styles}>
                  <Card className={classes.container}>
                <form onSubmit= {handleSubmit(this.onFormSubmit)}>
                <div>
                        <Field
                        startAdornment={<LockOutlined />}
                        placeholder= "current password"
                        name="password"
                        component={Input}
                        type="password"
                        />
                    </div>
                    <div>
                        <Field
                        startAdornment={<LockOutlined />}
                        placeholder= "new password"
                        name="new_password"
                        component={Input}
                        type="password"
                        />
                    </div>
                    <div>
                        <Field
                        startAdornment={<LockOutlined />}
                        placeholder="confirm new password"
                        name="confirm_password"
                        component={Input}
                        type="password"
                        />
                    </div>
                    <div>
                        <Button
                        style={{textTransform: "none"}}
                        type="submit">
                        Change Password
                        </Button>
                    </div>
                </form>
                </Card>
            // </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      email: state.currentUser.email
    };
  };

const WrappedChangePasswordForm = reduxForm({
    form: "changepassword"
})(withStyles(styles)(ChangePasswordForm));

export default connect(mapStateToProps)(withRouter(WrappedChangePasswordForm));