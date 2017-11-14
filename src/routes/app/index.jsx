import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Root from './routes/index.jsx';
import PropTypes from 'prop-types';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import items from '../../../config/sidebaritems.json';

import AppContent from '../../continers/AppContent';
import { userFetchData } from '../../actions/user';
import sidebarItems from '../../../config/sidebaritems.json';

import * as acl from '../../utils/acl';

class App extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount() {
        this.props.fetchData('user/issignin');
    }
    render(){
        if(this.props.loading_){   // loading not work becouse call fetchData brfore end 
            return (
                <div >
                    <Header name={this.props.name}/>
                        <Sidebar items={sidebarItems.array[this.props.role]} />
                    <AppContent>
                        <Root role={this.props.role} />
                    </AppContent>
                </div>
            );
            
        }
        return <div>Loading...</div>;
    }
}

App.PropTypes = {
    fetchData : PropTypes.func.isRequired,
    role : PropTypes.number
};

  
const mapStateToProps = (state) => {
  return {
    loading_: state.userinfo.loading_,
    loadinglogin: state.userinfo.loading,
    role: state.userinfo.user.type,
    name : state.userinfo.user.firstname
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => { dispatch ( userFetchData( url ) ) }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
