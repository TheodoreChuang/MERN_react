import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Input from "./fields/Input";
import { setAuthToken } from "./../../actions";
import LocalApi from "./../../apis/local";
import { connect } from "react-redux";

class LoginForm extends Component {

    onLoginFormSubmit = (formValues) => {
        const { email, password } = formValues;
        LocalApi.post("/login", {email, password})
        .then(response => {
            setAuthToken(response.data.token);
            this.props.history.push("/");
        })
        .catch(err => console.log(err));
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit = {handleSubmit(this.onLoginFormSubmit)}>
                <div>
                    <label>Email</label>
                    <Field
                    name="email"
                    component={Input}
                    type="email"
                    />
                </div>
                <div>
                    <label>Password</label>
                    <Field
                    name="password"
                    component={Input}
                    type="password"
                    />
                    </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        );
    }
}

const WrappedLoginForm = reduxForm({
    form: "login",
    validate: ({ email, password }) => {
        const errors = {}

        if (!email) {
            errors.email = "email is required!"
        }

        if (!password) {
            errors.password = "password is required!"
        }

        return errors;
    }
})(LoginForm)

export default connect (null, {
    setAuthToken
}) (WrappedLoginForm);