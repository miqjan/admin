import React from 'react';
import styles from './components.pcss';
import Link from 'react-router-dom';

//import avatar from '../../../assets/img/admin_avatar.jpg';

class HeaderMenu extends React.Component{
    render(){
        return(
            <div className={styles.root}>
                <ul>
                    <li><img  alt="Avatar"/></li>
                    <li>{this.props.adminName}</li>
                </ul>
            </div>
        )
    }
}

export default HeaderMenu;