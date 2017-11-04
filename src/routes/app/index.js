import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter,Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import  AdminRoute  from '../../components/Routing/PrivateRoute/AdminRoute';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import items from '../../../config/sidebaritems.json';

class App extends Component {
  render() {
      console.log(items);
    
      return (
        <div>
            
            <Route path="/gallery"  render={(props)=>(
                <div>
                <Header/>
                <Sidebar items={items.user}/>
                <div>vrffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffff
                    fffffffffffffffffff </div>
                </div>
            )}/>

            <AdminRoute path="/user"  role={2}  sidebaritems={items.admin} component={Header} />
            <Route  render={(props)=>(
                <div>
                not found
                </div>
            )}/>
        </div>
    );
  }
}

App.PropTypes = {

};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
