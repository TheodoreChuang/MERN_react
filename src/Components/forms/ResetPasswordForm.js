import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import LocalApi from "./../../apis/local";
import { withRouter } from "react-router-dom";
import Input from "./fields/Input";
import Button from '@material-ui/core/Button';

class ResetPasswordForm extends Component {
    state = { email: null, success: "" }

    onFormSubmit = (formValues) => {
        const { token } = this.props.match.params;
        const { password, confirm_password } = formValues;

        if (password !== confirm_password) {
            return alert("Passwords don't match");
        }

        LocalApi.put(`/resetpassword/${token}`, {password});
    }
    
    async componentDidMount() {
        console.log(this.props.match.params);
        await LocalApi.get(`/resetpassword/${this.props.match.params.token}`)
        .then(res => {
            if (res.data.message === "valid") {
                console.log("cool");
                this.setState({ success: "test" });
            }
        })
        .catch(err => console.log(err));
    }

    render() {
        console.log("rendered");
        const { handleSubmit } = this.props;

        return (
            <form onSubmit= {handleSubmit(this.onFormSubmit)}>
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
            </form>
        )
    }
}

const WrappedNewChallengeForm = reduxForm({
    form: "resetpassword"
})(ResetPasswordForm);

export default withRouter(WrappedNewChallengeForm);