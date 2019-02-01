import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import NewChallengePage from "./pages/NewChallengePage";
import SubmissionPage from "./pages/SubmissionPage";
import ProfilePage from "./pages/ProfilePage";
import ProfileCurrentPage from "./pages/ProfileCurrentPage";
import TermsAndConditions from "./pages/TermsAndConditions";
import ChallengePage from "./pages/ChallengePage";
import NewsFeedPage from "./pages/NewsFeedPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import UpdateProfileInfoPage from "./pages/UpdateProfileInfoPage";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>

          <div>
            <Switch>
              <Route
                exact
                path="/termsandconditions"
                component={TermsAndConditions}
              />
              <Route exact path = "/updateinfo" component = {UpdateProfileInfoPage} />
              <Route exact path="/landing" component={LandingPage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/register" component={RegisterPage} />
              <Route exact path="/profile/:id" component={ProfilePage} />
              <PrivateRoute
                exact
                path="/profile"
                component={ProfileCurrentPage}
              />
              <PrivateRoute exact path="/home" component={NewsFeedPage} />
              <PrivateRoute
                exact
                path="/newchallenge"
                component={NewChallengePage}
              />
              <PrivateRoute
                exact
                path="/challenges/:id"
                component={ChallengePage}
              />
              <PrivateRoute
                exact
                path="/challenges/:id/submit"
                component={SubmissionPage}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
