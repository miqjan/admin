import React from 'react';
import SidebarItem from '../SidebarItem';

import styles from './components.pcss';
import classNames from 'classnames';

class Sidebar extends React.Component {
    // window.onscroll = function() {
    //     var scrolled = (window.pageYOffset || document.documentElement.scrollTop);
    
    //     if(scrolled > 50){
    //         header.classList.add("active");
    //     }else{
    //         header.classList.remove("active");
    //     }
    // }
    render() {

        return(

        <div className={classNames(styles.root,styles.active)}>
            <div className={styles.menu}>
            <ul>
                {
                this.props.items.map((item, key) => (
                    <SidebarItem
                    to={item.to}
                    key={key}
                    >
                    { item.name }
                    </SidebarItem>
                ))
                }
            </ul>
            </div>
        </div>
        );
    };
}

export default Sidebar;
