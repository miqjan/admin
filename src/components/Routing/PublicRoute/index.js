import React from 'react';
import PropTypes from 'prop-types';

import {
  Route,
  Redirect,
} from 'react-router-dom';

import { getAccessToken } from '../../../utils/auth';

const isLoggedIn = () => getAccessToken();

class PublicRoute extends React.Component {
  render() {
    const {
      component: Component,
      render,
      ...rest
    } = this.props;

    return (
      <Route
        {...rest}
        render={(props) => {
          if (isLoggedIn()) {
            return (
              <Redirect
                to={{
                  pathname: '/gallery',
                }}
              />
            );
          } else if (Component) {
            return <Component {...props} />;
          }
          return render(props);
        }}
      />
    );
  }
}

PublicRoute.propTypes = {
  component: PropTypes.func,
  render: PropTypes.func,
};

PublicRoute.defaultProps = {
  component: null,
  render: () => false,
};

export default PublicRoute;
