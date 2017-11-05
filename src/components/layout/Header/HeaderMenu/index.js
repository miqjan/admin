import React from 'react';
import styles from './components.pcss';
import Link from 'react-router-dom';
import { connect } from 'react-redux';
import {push } from 'react-router-redux'
import {
    Route,
    Redirect,
  } from 'react-router-dom';

import avatar from '../../../../../public/img/admin_avatar.jpg';

class HeaderMenu extends React.Component{
    ClickHendlerLogout = () => {
        window.localStorage.removeItem('token');
        console.log(this);
       
    }
    render(){
        return(
            <div className={styles.root}>
                <ul>
                    
                    <li><img src={avatar} alt="Avatar"/></li>
                    <li>
                        <button type="button" onClick={this.ClickHendlerLogout}>Ligout</button>
                    </li>
                    <li>{this.props.adminName}</li>
                </ul>
            </div>
        )
    }
}

export default connect(HeaderMenu);
