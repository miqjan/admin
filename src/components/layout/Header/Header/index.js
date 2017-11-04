import React from 'react';
import styles from './components.pcss';
import HeaderLogo from '../HeaderLogo/index';
import HeaderMenu from '../HeaderMenu';

const Header = () => {
    return(
        <header>
            <div className={styles.root}>
                <HeaderLogo />
                <HeaderMenu adminName={"Admin Name"} />
            </div>
        </header>
    );
};

export default Header;