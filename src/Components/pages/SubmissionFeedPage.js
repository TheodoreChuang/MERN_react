import React, { Component } from "react";
import { removeAuthToken, fetchSubmissions } from "../../actions";
import { connect } from "react-redux"; 
import NavBar from '../components/NavBar';
import ChallengeCard from '../components/ChallengeCard';

class SubmissionFeedPage extends Component  {

    constructor(props) {
        super(props);
        const { fetchSubmissions } = this.props;

        fetchSubmissions();
    }

    render() {
        const { submissions } = this.props;

        return (
                <div>
                    <NavBar />
                    <h2>Submission Feed Page</h2>
                        {submissions.map (function(submission) {
                            return ( 
                                <div key={submission.title}>
                                    <ChallengeCard yt_id={submission.yt_id} title={submission.title}  date_created={submission.date_created} /> 
                                </div>
                                );
                        })}
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        submissions: state.submissions
    };
}

export default connect(mapStateToProps, {
    removeAuthToken,
    fetchSubmissions
})(SubmissionFeedPage);
