import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../layout/Header';
import Sidebar from '../../layout/Sidebar'; 

import {
  Route,
  Redirect,
} from 'react-router-dom';


const role = 0;

class AdminRoute extends React.Component {
    render() {
        const {
            component: Component,
            render,
            componentprops,
            role,
            ...rest
        } = this.props;

        return (
        <Route
            {...rest}
            render={(props) => {
                props = Object.assign(props,componentprops);
                if (role < 1) {
                    return (
                        <Redirect
                            to={{
                            pathname: '/gallery',
                            }}
                        />
                    );
                } else if (Component) {
                    return (
                        <div>
                            <Component {...props} />
                        </div>
                    );
                }
                return render(props);
            }}
        />
        );
    }
}

AdminRoute.PropTypes = {
    component: PropTypes.func,
    render: PropTypes.func,
    componentprops: PropTypes.object
};

AdminRoute.defaultProps = {
    component: null,
    render: () => false,
    role: 0
};

export default AdminRoute;
