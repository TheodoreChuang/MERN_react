import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import NewsFeedPage from "./pages/NewsFeedPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import NewChallengePage from "./pages/NewChallengePage";

class App extends Component {
  
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
              <Route exact path = "/portal" component = {MainPage} />
              <Route exact path = "/login" component = {LoginPage} />
              <Route exact path = "/register" component = {RegisterPage} />
              <PrivateRoute exact path = "/" component = {NewsFeedPage} />
              <PrivateRoute exact path = "/newchallenge" component = {NewChallengePage} />
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;