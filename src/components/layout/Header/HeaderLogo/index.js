import React from 'react';
import { Link } from 'react-router-dom';

import styles from './components.pcss';
//import logo from '../../../assets/img/logo_og.png';

class HeaderLogo extends React.Component{
    render(){
        return(
            <div className={styles.root}>
                <Link to={'#'}><img  alt="Social Link"/></Link>
            </div>
        )
    }
}

export default HeaderLogo;
