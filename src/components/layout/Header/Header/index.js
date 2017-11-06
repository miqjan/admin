import React from 'react';
import styles from './components.pcss';
import HeaderLogo from '../HeaderLogo/index';
import HeaderMenu from '../HeaderMenu';

class Header extends React.Component  {
    render(){
        return(
            <header>
                <div className={styles.root}>
                    <HeaderLogo />
                    <HeaderMenu adminName={this.props.name} />
                </div>
            </header>
        );
    }
};

export default Header;
