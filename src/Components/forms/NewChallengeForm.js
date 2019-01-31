import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Input from "./fields/Input";
import Button from '@material-ui/core/Button';
import Loader from "./../Loader";
import DateField from "./fields/DateField";
import DateHelper from "./fields/DateHelper";
import { withRouter } from "react-router-dom";
import LocalApi from "./../../apis/local";
import { connect } from "react-redux";
import { getCurrentUser } from "./../../actions";


class NewChallengeForm extends Component {
    state = { loading: false }

    componentDidMount() {
        const { getCurrentUser } = this.props; 
        getCurrentUser();
    }

    onUploadSubmit = async (formValues) => {
        const { history } = this.props;
        const { title, description, video, expiry_date } = formValues;

        const fd = new FormData();
        fd.append("video", video[0]);
        fd.append("title", title);
        fd.append("description", description);
        // fd.append("creator_id", creator_id);
        
        // Conditional as expiry_date value might not be entered as it is not mandatory
        if (expiry_date) {
            fd.append("expiry_date", expiry_date);
        }

        this.setState({ loading: true });
        await LocalApi.post("/challenges/upload", fd);
        history.push("/");
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <form onSubmit= {handleSubmit(this.onUploadSubmit)} encType="multipart/form-data">
                    <div>
                        <Field
                        name="title"
                        component={Input}
                        placeholder="Title of challenge"
                        type="text"
                        />
                    </div>
                    <div>
                        <Field
                        name="description"
                        component={Input}
                        placeholder="Description of challenge"
                        type="text"
                        multiline
                        />
                    </div>
                    {/* <div>
                        <Field
                        name="creator_id"
                        component={Input}
                        placeholder="Creator id"
                        type="text"
                        />
                    </div> */}
                    <div>
                        <Field
                        name="expiry_date"
                        label="Expiry date"
                        component={DateField}
                        type="date"
                        />
                    </div>
                    <div>
                        <Field
                        name="video"
                        component={Input}
                        type="file"
                        />
                    </div>
                    <div>
                        <Button
                        style={{textTransform: "none"}}
                        type="submit">
                        Upload Challenge
                        </Button>
                    </div>
                </form>
                <div>
                    {this.state.loading === true && <Loader />}
                </div>
                <div
                style={{color: "green", marginLeft: "10px"}}>
                    {this.state.loading === "success" && "Upload Succesful!"}
                </div>
            </div>
        );
    }
}

const WrappedNewChallengeForm = reduxForm({
    form: "upload",
    validate: ({
        title, description, creator_id, video, expiry_date
    }) => {
    const errors = {}

    if (!creator_id) {
        errors.creator_id = "Required!"
    }
    
    if (!title) {
        errors.title = "Required!"
    }

    if (!description) {
        errors.description = "Required!"
    }

    if (expiry_date < DateHelper()) {
        errors.expiry_date = "Invalid!"
    }

    if (video) {
        if (video.length < 1 ) {
            errors.video = "Required!"
        }
    }

    return errors;

    }
})(NewChallengeForm);

const mapStateToProps = (state)  => {
    return {
        token: state.auth.token,
        user: state.currentUser
    };
}

export default connect(mapStateToProps, {
    getCurrentUser
})(withRouter(WrappedNewChallengeForm));