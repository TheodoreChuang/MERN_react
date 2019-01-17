import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Input from "./fields/Input";
import { setAuthToken } from "./../../actions";
import LocalApi from "./../../apis/local";

class LoginForm extends Component {

    onLoginFormSubmit = (formValues) => {
        const { email, password } = formValues;
        LocalApi.post("/login", {email, password})
        .then(response => {
            setAuthToken(response.data.token);
            this.props.history.push("/newsfeed");
        })
        .catch(err => console.log(err));
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit = {handleSubmit(this.onLoginFormSubmit)}>
                <Field
                name="email"
                component={Input}
                type="email"
                />
                <Field
                name="password"
                component={Input}
                type="password"
                />
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