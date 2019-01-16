import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path = "/" component = {LoginPage} />
            <Route exact path = "/signup" component = {RegisterPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;