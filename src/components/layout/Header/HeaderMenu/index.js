import React from 'react';
import { withRouter } from 'react-router-dom';

import styles from './components.pcss';

// import imgAvatar from '../../../../../public/img/admin_avatar.jpg';

class HeaderMenu extends React.Component {
  onLogout = () => {
    window.localStorage.clear();
    this.props.history.push('/');
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

export default withRouter(HeaderMenu);
