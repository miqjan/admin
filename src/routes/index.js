import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Switch } from 'react-router';



import Auth from './auth';
import App from './app';


import {
  PublicRoute,
  PrivateRoute
} from '../components/Routing';


class Root extends Component {
  componentWillMount() {
   
  }

  render() {
    return(
      <Switch>
        {/* <Redirect from="/login" to="/" /> */}
        <PublicRoute path="/" exact component={Auth}/>
        <PrivateRoute component={App} />{/*redirict to'/' when is not login*/}
      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userinfo.user,
    hasError: state.userinfo.error,
    isLogin: state.userinfo.isLogin,
    loading: state.userinfo.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
