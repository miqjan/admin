import React from 'react';
import styles from './components.pcss';
import { Link } from 'react-router-dom';

class SidebarItem extends React.Component{
    render(){
        return(
            <li className={styles.root}>
                <Link to={'/'+this.props.to}>
                    {this.props.children}
                </Link>
            </li>
        );
    };
}

export default SidebarItem;
