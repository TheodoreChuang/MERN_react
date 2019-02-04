import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import LocalApi from "./../../apis/local";
import { withRouter } from "react-router-dom";
import Input from "./fields/Input";
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';

class ResetPasswordForm extends Component {
    state = { error: "" }

    onFormSubmit = (formValues) => {
        const { history} = this.props;
        const { token } = this.props.match.params;
        const { password, confirm_password } = formValues;

        if (password !== confirm_password) {
            return swal(":(", "Passwords did not match!", "error", {
                button: false,
                timer: 2000
            });
        };

        LocalApi.put(`/resetpassword/${token}`, {password})
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
    
    async componentDidMount() {
        await LocalApi.get(`/resetpassword/${this.props.match.params.token}`)
        .then(res => {
            if (res.status === 200) {
                return this.setState({ error: false });
            }
        })
        .catch(err => {
            this.setState({ error: true });
            let error = "";
            for(let i in err.response.data) {
              error += `${err.response.data[i]} \r\n`;
            }
            return swal(":(", error, "error");
          })
    }

    render() {
        console.log("rendered");
        const { handleSubmit } = this.props;

        return (
            <div>
                {this.state.error === false && <form onSubmit= {handleSubmit(this.onFormSubmit)}>
                    <div>
                        <Field
                        placeholder="new password"
                        name="password"
                        component={Input}
                        type="password"
                        />
                    </div>
                    <div>
                        <Field
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
                </form> }
            </div>
        )
    }
}

const WrappedNewChallengeForm = reduxForm({
    form: "resetpassword"
})(ResetPasswordForm);

export default withRouter(WrappedNewChallengeForm);