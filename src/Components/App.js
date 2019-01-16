import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path = "/" component = {LoginPage} />
            <Route exact path = "/signup" component = {SignUpPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;