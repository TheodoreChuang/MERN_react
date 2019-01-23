import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import SubmissionsFeedPage from "./pages/SubmissionsFeedPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import NewChallengePage from "./pages/NewChallengePage";
import SubmissionPage from "./pages/SubmissionPage";
import FeedPage from "./pages/FeedPage";
import ProfilePage from "./pages/ProfilePage";
import TermsAndConditions from "./pages/TermsAndConditions";
import ChallengeFeedPage from "./pages/ChallengeFeedPage";

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
                <Route exact path = "/feed" component = {FeedPage} />
                <Route exact path = "/profile" component = {ProfilePage} />
                <PrivateRoute exact path = "/" component = {SubmissionsFeedPage} />
                <PrivateRoute exact path = "/newchallenge" component = {NewChallengePage} />
                <Route exact path = "/challengefeed" component = {ChallengeFeedPage } />
              </Switch>
            </div>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;