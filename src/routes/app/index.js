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



class App extends Component {
  componentWillMount() {
    this.props.fetchData('user/issignin');
  }

  render() {
    if(!this.props.loading){
      return <div>Loading...</div>;
    }

    return (
      <div >
        <Header/>
        <Sidebar items={items.array[this.props.role]} />
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
