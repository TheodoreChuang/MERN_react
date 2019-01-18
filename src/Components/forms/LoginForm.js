import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Input from "./fields/Input";
import { setAuthToken } from "./../../actions";
import LocalApi from "./../../apis/local";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
                    <Field
                    name="email"
                    component={Input}
                    type="email"
                    placeholder="Email"
                    />
                </div>
                <div>
                    <Field
                    name="password"
                    component={Input}
                    type="password"
                    placeholder="Password"
                    />
                    </div>
                <div>
                <div>
                    <a href="/forgotpassword" target="_blank"> 
                        Forgot password?
                    </a>
                </div>
                    <button type="submit">Sign in</button>
                </div>
                <div>
                    Don't have an account? 
                    <Link to="/register"> Sign Up </Link>
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