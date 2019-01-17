import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import FeedPage from './FeedPage';



class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={FeedPage} />
          <Route exact path='/profile' component={ProfilePage} />
        </Switch>
      </div>
    )

    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;