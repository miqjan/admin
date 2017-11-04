import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../layout/Header';
import Sidebar from '../../layout/Sidebar'; 

import {
  Route,
  Redirect,
} from 'react-router-dom';




class AdminRoute extends React.Component {
    render() {
        const {
            component: Component,
            render,
            role,
            sidebaritems,
            ...rest
        } = this.props;

        return (
        <Route
            {...rest}
            render={(props) => {
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
                        <Header/>
                        <Sidebar items={sidebaritems}/>
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
    role: PropTypes.number.isRequired,
    sidebaritems: PropTypes.array
};

AdminRoute.defaultProps = {
    component: null,
    render: () => false,
    role: 0
};

export default AdminRoute;
