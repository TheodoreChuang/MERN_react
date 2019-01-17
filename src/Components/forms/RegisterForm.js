import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Input from "./fields/Input";
import LocalApi from "../../apis/local";
import { setAuthToken } from "./../../actions";
import { connect } from "react-redux";

class RegisterForm extends Component {
    
    onRegisterFormSubmit = (formValues) => {
        const { first_name, last_name, nickname, email, password, terms_conditions } = formValues;
        const { setAuthToken } = this.props;

        LocalApi.post("/register", {first_name, last_name, nickname, email, password, terms_conditions})
        .then(response => {
            //acquring token
            setAuthToken(response.data.token);
            //redirect
            this.props.history.push("/newsfeed");
        })
        .catch(err => console.log(err));
        }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <form onSubmit = {handleSubmit(this.onRegisterFormSubmit)}> 
                    <div>
                        <label>First Name</label>
                        <Field 
                        name="first_name" 
                        component={Input}
                        type="text" />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <Field 
                        name="last_name" 
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
                        name="terms_conditions" 
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

const WrappedRegisterForm = reduxForm({
    form: "register",
    validate: ({ first_name, last_name, nickname, email, password, terms_conditions }) => {
        const errors = {}

        if (!first_name) {
            errors.first_name = "First name is required!"
        }

        if (!last_name) {
            errors.last_name = "Last name is required!"
        }

        if (!nickname) {
            errors.nickname = "Nickname is required!"
        }

        if (!email) {
            errors.email = "Email is required!"
        }

        if (!password) {
            errors.password = "Password is required!"
        }

        if (!terms_conditions) {
            errors.terms_conditions = "Please confirm your agreement to Terms & Conditions!"
        }

        return errors;
    }
})(RegisterForm)

export default connect(null, {
    setAuthToken
}) (WrappedRegisterForm);