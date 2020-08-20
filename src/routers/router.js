import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from '../pages/home/home';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="*" render={() => (<Redirect to="/" />)} />
    </Switch>
  </Router>
);

export default Routes;
