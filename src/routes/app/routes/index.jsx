import React, {Component} from 'react';
import {Switch} from 'react-router';
import {withRouter} from 'react-router-dom';

import {
    PrivateRoute,
    AppRoute
} from '../../../components/Routing';
import AdminRoute from '../../../components/Routing/PrivateRoute/AdminRoute';

import Table from '../../../continers/Table';
import Temp from '../../../continers/ui/Temp';
import Gallery from '../../../components/ui/gallery';

import items from '../../../../config/sidebaritems.json';

import * as acl from '../../../utils/acl';

class Root extends Component {

    render() {
        return (
            <Switch>
                <PrivateRoute path="/gallery" component={Gallery}/>

                <AppRoute
                    path="/user"
                    component={Table}
                    permission={acl.canViewUsers()}
                />
                <AppRoute
                    path="/temp"
                    permission={acl.canViewUsers()}
                   // componentprops={{tableHead: items.tableHead, tableBody: items.tableBody}}
                    component={Temp}
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

