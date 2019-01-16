import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NewsFeedPage from "./pages/NewsFeedPage";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path = "/" component = {LoginPage} />
            <Route exact path = "/signup" component = {RegisterPage} />
            <Route exact path = "/newsfeed" component = {NewsFeedPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;