import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentUser } from "./../actions";
import PrivateRoute from "./PrivateRoute";

import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import NewChallengePage from "./pages/NewChallengePage";
import SubmissionPage from "./pages/SubmissionPage";
import ProfilePage from "./pages/ProfilePage";
import ProfileCurrentPage from "./pages/ProfileCurrentPage";
import TermsAndConditions from "./pages/TermsAndConditions";
import ChallengePage from "./pages/ChallengePage";
import NewsFeedPage from "./pages/NewsFeedPage";
import ChallengeFeedPage from "./pages/ChallengeFeedPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import UpdateProfileInfoPage from "./pages/UpdateProfileInfoPage";
import NotFoundPage from "./pages/NotFoundPage";

import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import WebFont from 'webfontloader';

// Module to help import google fonts
WebFont.load({
  google: {
    families: ['Muli', 'sans-serif']
  }
});

class App extends Component {
  componentDidMount() {
    const { getCurrentUser, token } = this.props;

    // If there is token value in redux, then also get current user details. Current user details is now always available to all components even when refreshed
    if (token) {
      getCurrentUser();
    }
  }

  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <div>
              <Switch>
                <Route exact path="/landing" component={LandingPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/register" component={RegisterPage} />
                <Route
                  exact
                  path="/termsandconditions"
                  component={TermsAndConditions}
                />
                <Route exact path="/" component={NewsFeedPage} />
                <Route exact path="/challenges" component={ChallengeFeedPage} />
                <Route exact path="/profile/:id" component={ProfilePage} />
                <Route exact path="/challenges/:id" component={ChallengePage} />
                <Route
                exact
                path="/resetpassword/:token"
                component={ResetPasswordPage}
              />
                <PrivateRoute
                  exact
                  path="/profile"
                  component={ProfileCurrentPage}
                />

                <PrivateRoute
                  exact
                  path="/updateinfo"
                  component={UpdateProfileInfoPage}
                />
                <PrivateRoute
                  exact
                  path="/newchallenge"
                  component={NewChallengePage}
                />
                <PrivateRoute
                  exact
                  path="/challenges/:id/submit"
                  component={SubmissionPage}
                />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    currentUser: state.currentUser
  };
};

export default connect(
  mapStateToProps,
  {
    getCurrentUser
  }
)(App);
