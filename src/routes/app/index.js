import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Root from './routes';
import PropTypes from 'prop-types';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import items from '../../../config/sidebaritems.json';

import AppContent from '../../continers/AppContent';
import { userFetchData } from '../../actions/user';


import * as acl from '../../utils/acl';

class App extends Component {
  sidebarItems = [
    {
      name: 'Gallery',
      to: 'gallery',
      access: true,
    },
    {
      name: 'Users',
      to: 'user',
      access: acl.canViewUsers()
    },
  ];
  componentWillMount() {
    this.props.fetchData('user/issignin');
  }

  render() {
    if(!this.props.loading){
      return <div>Loading...</div>;
    }

    const sidebarItems = this.sidebarItems.filter(i => i.access);

    return (
      <div >
        <Header/>
        <Sidebar items={sidebarItems} />
        <AppContent>
          <Root role={this.props.role} />
        </AppContent>
      </div>
    );
  }
}

App.PropTypes = {
  fetchData : PropTypes.func.isRequired,
  role : PropTypes.number
};

const mapStateToProps = (state) => {
  return {
    loading: state.userinfo.loading,
    role: state.userinfo.user.type
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => { dispatch ( userFetchData( url ) ) }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
