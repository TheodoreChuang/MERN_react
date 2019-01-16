import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

//encrypt password before sending?
class SignUpForm extends Component {
    onSignUpFormSubmit = (formValues) => {
        const { firstName, lastName, nickname, email, password, conditions } = formValues;
        const { reset } = this.props;
        // createUser({ formValues });
        reset();
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
                        component="input" 
                        type="text" />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <Field 
                        name="lastName" 
                        component="input" 
                        type="text" />
                    </div>
                    <div>
                        <label>Nickname</label>
                        <Field 
                        name="nickname" 
                        component="input" 
                        type="text" />
                    </div>
                    <div>
                        <label>Email</label>
                        <Field 
                        name="email" 
                        component="input" 
                        type="email" />
                    </div>
                    <div>
                        <label>Password</label>
                        <Field 
                        name="password" 
                        component="input" 
                        type="password" />
                    </div>
                    <div>
                        <Field 
                        name="conditions" 
                        component="input" 
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
    form: "signup"
})(SignUpForm)

export default WrappedSignUpForm;