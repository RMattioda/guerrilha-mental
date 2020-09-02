import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from '../pages/home/home';
import Podcast from '../pages/podcast/podcast';
import Sobre from '../pages/sobre/sobre';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/podcast" component={Podcast} />
      <Route path="/sobre" component={Sobre} />
      <Route path="*" render={() => (<Redirect to="/" />)} />
    </Switch>
  </Router>
);

export default Routes;
