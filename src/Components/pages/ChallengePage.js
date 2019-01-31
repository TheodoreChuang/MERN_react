import React, { Component } from "react";
import ChallengeCard from "./../cards/ChallengeCard";
import NavBar from "../NavBar";
import LocalApi from "./../../apis/local";

class ChallengePage extends Component  {
    state = { 
        challenges: []
    }

    async componentDidMount() {
        const response = await LocalApi.get("/challenges");
        this.setState({ challenges : response.data });
    }

    render() {
        const { match } = this.props;
        const { challenges } = this.state;

        // Function to dynamically return specific challenge page off the url params
        const challenge = challenges.find(function(chal) {
            return (parseInt(chal._id) === parseInt(match.params.id));
        });
        return (
            <div>
                <NavBar />
                <h2> Specific Challenge Page </h2>
                {challenge && 
                    <ChallengeCard 
                    viewMoreDetail={false}
                    user_id={challenge.user.creator_id}
                    nickname={challenge.user.nickname}
                    profile_image={challenge.user.profile_image}
                    title={challenge.title}
                    yt_id={challenge.yt_id}
                    description={challenge.description}
                    date_created={challenge.createdAt}
                /> }
                
                <h2> Specific Challenge Submissions </h2>
                {challenge && 
                    challenge.submissions.map((sub) => {
                        return (
                            <div key={sub.yt_id}>
                                <ChallengeCard 
                                viewMoreDetail={false}
                                nickname={sub.user.nickname}
                                user_id={sub.user.id} 
                                profile_image={sub.user.profile_image}
                                title={sub.title}
                                yt_id={sub.yt_id}
                                description={sub.description}
                                date_created={sub.createdAt}
                                />
                            </div>
                        )
                })}
            </div>
        );
    }
}

export default ChallengePage;
// =======
// import { connect } from "react-redux";
// import { removeAuthToken, fetchChallenges } from "../../actions";

// import ChallengeCard from "./../cards/ChallengeCard";
// import NavBar from "../NavBar";

// import { withStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";

// const styles = theme => ({
//   container: {
//     backgroundColor: theme.palette.background.paper
//   },
//   typography: {
//     textAlign: "center",
//     margin: "30px auto"
//   }
// });

// class ChallengePage extends Component {
//   constructor(props) {
//     super(props);
//     const { fetchChallenges } = this.props;

//     fetchChallenges();
//   }

//   render() {
//     const { match, classes, challenges } = this.props;

//     const challenge = challenges.find(function(element) {
//       return parseInt(element._id) === parseInt(match.params.id);
//     });
//     return (
//       <div>
//         <NavBar {...this.props} />
//         <Grid container direction="row" justify="center" alignItems="center">
//           <Grid item xs={12} md={8}>
//             <Typography className={classes.typography} variant="h5">
//               {challenge && challenge.title}
//             </Typography>

//             <ChallengeCard {...challenge} />

//             <Typography className={classes.typography} variant="h5">
//               {(challenge && challenge.submissions.length) || 0} completed times
//             </Typography>

//             {challenge &&
//               challenge.submissions.map(element => {
//                 return (
//                   <div>
//                     <ChallengeCard yt_id={element.yt_id} />
//                   </div>
//                 );
//               })}
//           </Grid>
//         </Grid>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     challenges: state.challenges
//   };
// };

// const Wrapped = connect(
//   mapStateToProps,
//   {
//     removeAuthToken,
//     fetchChallenges
//   }
// )(ChallengePage);

// export default withStyles(styles)(Wrapped);
// >>>>>>> dev
