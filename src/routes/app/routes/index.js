import React, { Component } from 'react';
import Table from '../../../components/ui/Table';
import  AdminRoute  from '../../../components/Routing/PrivateRoute/AdminRoute';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import items from '../../../../config/sidebaritems.json';
import { withRouter} from 'react-router-dom';


import {
    PublicRoute,
    PrivateRoute
  } from '../../../components/Routing';
  
class Root extends Component {
    componentWillMount() {
      //this.props.fetchData('user/issignin');
    }
  
    render() {
      return(
        <Switch>
            <PrivateRoute path="/gallery"  render={(props)=>(
                <div>
                    bvhdvjh
                </div>
            )}/>

            <AdminRoute path="/user" role={this.props.role}
                componentprops={{tableHead: items.tableHead,tableBody: items.tableBody}}
                component={Table} 
            />
            
            <PrivateRoute  render={(props)=>(
                <div>
                not found
                </div>
            )}/>
        </Switch>
      );
    }
}

export default withRouter(Root);

