import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
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
                <Route exact path = "/landing" component = {LandingPage} />
                <Route exact path = "/login" component = {LoginPage} />
                <Route exact path = "/register" component = {RegisterPage} />
                <PrivateRoute exact path = "/profile" component = {ProfilePage} />
                <PrivateRoute exact path = "/" component = {SubmissionFeedPage} />
                <PrivateRoute exact path = "/newchallenge" component = {NewChallengePage} />
                <PrivateRoute exact path = "/challengefeed" component = {ChallengeFeedPage } />
                <PrivateRoute exact path = "/challenges/:id" component = {ChallengePage } />
                <PrivateRoute exact path = "/submit/:id/" component = {SubmissionPage} />
              </Switch>
            </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;