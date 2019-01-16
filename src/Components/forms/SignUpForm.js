import React, { Component } from "react";

class SignUpForm extends Component {

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>First Name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Nickname</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" />
                    </div>
                    <div>
                        <input type="checkbox" /> I have read and agreed to the Terms &amp; Conditions
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;