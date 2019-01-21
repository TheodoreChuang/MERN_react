import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import NewsFeedPage from "./pages/NewsFeedPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import NewChallengePage from "./pages/NewChallengePage";
import FeedPage from "./pages/FeedPage";
import ProfilePage from "./pages/ProfilePage";
import NewRegister from "./forms/NewRegisterForm"
import { Switch } from "react-router-dom";

class App extends Component {
  
  render() {
    return (
      <div>
        <BrowserRouter>
            <div>
              <Switch>
                <Route exact path = "/newregister" component = {NewRegister} />
                <Route exact path = "/portal" component = {MainPage} />
                <Route exact path = "/login" component = {LoginPage} />
                <Route exact path = "/register" component = {RegisterPage} />
                <Route exact path = "/feed" component = {FeedPage} />
                <Route exact path = "/profile" component = {ProfilePage} />
                <PrivateRoute exact path = "/" component = {NewsFeedPage} />
                <PrivateRoute exact path = "/newchallenge" component = {NewChallengePage} />
              </Switch>
            </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;