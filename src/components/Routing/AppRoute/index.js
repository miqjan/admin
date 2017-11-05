import React from 'react';
import PropTypes from 'prop-types';

import {
  Route,
} from 'react-router-dom';

class AppRoute extends React.Component {
  render() {
    const {
      permission,
      component: Component,
      ...rest
    } = this.props;

    if (!permission) {
      return <div>Not Found</div>;
    }

    return (
      <Route
        {...rest}
        component={Component}
      />
    );
  }
}

AppRoute.propTypes = {
  component: PropTypes.func,
  permission: PropTypes.bool,
};

AppRoute.defaultProps = {
  component: null,
  permission: true,
};

export default AppRoute;
