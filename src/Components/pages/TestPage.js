import React, {Component} from "react";
import ChallengeCard from "./../cards/ChallengeCard";

class TestPage extends Component {

    componentDidMount() {
        console.log("test page mounted");
    }

    render() {
        const { submissions } = this.props;

        return (
            <div>
                {submissions && submissions.map (function(submission) {
                    console.log(submission);
                    return ( 
                        <div key={submission._id}>
                            <ChallengeCard yt_id={submission.yt_id} title={submission.title}  date_created={submission.date_created} id={submission._id} /> 
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default TestPage;
