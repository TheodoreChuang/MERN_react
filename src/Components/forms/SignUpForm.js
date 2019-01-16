import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Input from "./fields/Input";

//encrypt password before sending?
class SignUpForm extends Component {
    onSignUpFormSubmit = (formValues) => {
        const { firstName, lastName, nickname, email, password, conditions } = formValues;
        const { reset } = this.props;
        // createUser({ formValues });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <form onSubmit = {handleSubmit(this.onSignUpFormSubmit)}> 
                    <div>
                        <label>First Name</label>
                        <Field 
                        name="firstName" 
                        component={Input}
                        type="text" />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <Field 
                        name="lastName" 
                        component={Input} 
                        type="text" />
                    </div>
                    <div>
                        <label>Nickname</label>
                        <Field 
                        name="nickname" 
                        component={Input}
                        type="text" />
                    </div>
                    <div>
                        <label>Email</label>
                        <Field 
                        name="email" 
                        component={Input}
                        type="email" />
                    </div>
                    <div>
                        <label>Password</label>
                        <Field 
                        name="password" 
                        component={Input}
                        type="password" />
                    </div>
                    <div>
                        <Field 
                        name="agreements" 
                        component={Input}
                        type="checkbox" />
                        I have read and agreed to the Terms &amp; Conditions
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

const WrappedSignUpForm = reduxForm({
    form: "signup",
    validate: ({ firstName, lastName, nickname, email, password, agreement }) => {
        const errors = {}

        if (!firstName) {
            errors.title = "First name is required!"
        }

        if (!lastName) {
            errors.title = "Last name is required!"
        }

        if (!nickname) {
            errors.title = "Nickname is required!"
        }

        if (!email) {
            errors.title = "Email is required!"
        }

        if (!password) {
            errors.title = "Password is required!"
        }

        if (!agreement) {
            errors.title = "Please confirm your agreement to Terms & Conditions!"
        }

        return errors;
    }
})(SignUpForm)

export default WrappedSignUpForm;