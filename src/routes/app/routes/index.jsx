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
import Gallery from '../../../continers/ui/Gallery';
import Service from '../../../continers/ui/Service'
import Gallery_images from '../../../components/ui/gallery';
import Partner from '../../../continers/ui/Partner';
import Work from '../../../continers/ui/Work';

import items from '../../../../config/sidebaritems.json';

import * as acl from '../../../utils/acl';

class Root extends Component {

    render() {
        return (
            <Switch>
                <PrivateRoute path="/gallery_images" component={Gallery_images}/>
               
                <AppRoute
                    path="/partner"
                    component={Partner}
                    permission={acl.canViewUsers()}
                />
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
                <AppRoute
                    path="/gallery"
                    permission={acl.canViewUsers()}
                // componentprops={{tableHead: items.tableHead, tableBody: items.tableBody}}
                    component={Gallery}
                />
                <AppRoute
                    path="/service"
                    permission={acl.canViewUsers()}
                // componentprops={{tableHead: items.tableHead, tableBody: items.tableBody}}
                    component={Service}
                />
                <AppRoute
                    path="/work"
                    permission={acl.canViewUsers()}
                // componentprops={{tableHead: items.tableHead, tableBody: items.tableBody}}
                    component={Work}
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

