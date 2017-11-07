import React, {Component} from 'react';
import {Switch} from 'react-router';
import {withRouter} from 'react-router-dom';

import {
    PrivateRoute,
    AppRoute
} from '../../../components/Routing';
import AdminRoute from '../../../components/Routing/PrivateRoute/AdminRoute';

import Table from '../../../components/ui/Table';

import items from '../../../../config/sidebaritems.json';

import * as acl from '../../../utils/acl';

class Root extends Component {

    render() {
        return (
            <Switch>
                <PrivateRoute path="/gallery" render={(props) => (
                    <div>
                        bvhdvjh
                    </div>
                )}/>

                <AppRoute
                    path="/user"
                    component={Table}
                    permission={acl.canViewUsers()}
                />
                <AdminRoute
                    path="/user"
                    role={this.props.role}
                    componentprops={{tableHead: items.tableHead, tableBody: items.tableBody}}
                    component={Table}
                />
                <PrivateRoute render={(props) => (
                    <div>
                        not found
                    </div>
                )}/>
            </Switch>
        );
    }
}

export default withRouter(Root);

