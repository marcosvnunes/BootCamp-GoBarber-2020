import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Router';

import SignIn from '../pages/Signin';
import SignUp from '../pages/SignUp';
import DashBoard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/dashboard" component={DashBoard} isPrivate />
  </Switch>
);

export default Routes;
