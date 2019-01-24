import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import SubmissionFeedPage from "./pages/SubmissionFeedPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import NewChallengePage from "./pages/NewChallengePage";
import SubmissionPage from "./pages/SubmissionPage";
import ProfilePage from "./pages/ProfilePage";
import TermsAndConditions from "./pages/TermsAndConditions";
import ChallengeFeedPage from "./pages/ChallengeFeedPage";
import ChallengePage from "./pages/ChallengePage";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
            <div>
              <Switch>
                <Route exact path = "/termsandconditions" component = {TermsAndConditions} />
                <Route exact path = "/portal" component = {MainPage} />
                <Route exact path = "/login" component = {LoginPage} />
                <Route exact path = "/register" component = {RegisterPage} />
                <PrivateRoute exact path = "/profile" component = {ProfilePage} />
                <PrivateRoute exact path = "/home" component = {NewsFeedPage} />
                <PrivateRoute exact path = "/newchallenge" component = {NewChallengePage} />
                <PrivateRoute exact path = "/newsubmission" component = {SubmissionPage} />
                <Route exact path = "/feed" component = {FeedPage} />
                <PrivateRoute exact path = "/submissionfeed" component = {SubmissionFeedPage} />
                <Route exact path = "/challengefeed" component = {ChallengeFeedPage } />
                <Route exact path = "/challenges/:id" component = {ChallengePage } />
                <Route exact path = "/submit" component = {SubmissionPage} />
              </Switch>
            </div>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;