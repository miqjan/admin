import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {
  Route,
  Redirect,
} from 'react-router-dom';

import styles from './components.pcss';

// import imgAvatar from '../../../../../public/img/admin_avatar.jpg';

class HeaderMenu extends React.Component {
  onLogout = () => {
    window.localStorage.removeItem('token');
  };

  render(){
    return(
      <div className={styles.root}>
        <ul>
          <li><img src={''} alt="Avatar"/></li>
          <li>
            <button type="button" onClick={this.onLogout}>Log Out</button>
          </li>
          <li>{this.props.adminName}</li>
        </ul>
      </div>
    )
  }
}

export default connect()(HeaderMenu);
