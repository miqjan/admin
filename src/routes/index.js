import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import Auth from './auth';
import App from './app';

import {
  PublicRoute,
  PrivateRoute
} from '../components/Routing';


class Root extends Component {
  render() {
    return(
      <Switch>
        <PublicRoute path="/" exact component={Auth}/>
        <PrivateRoute component={App} />{/*redirict to'/' when is not login*/}
      </Switch>
    );
  }
}

export default Root;
