import React from 'react';
import styles from './components.pcss';
import SidebarItem from '../SidebarItem';
class Sidebar extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className={styles.root}>
                <div className={styles.menu}>
                    <ul>
                    {
                        this.props.items.map((item, key) => {
                           
                            return   ( <SidebarItem
                                    to={item.to}
                                    key={key}
                                >
                                    {item.sidebarItem}
                                </SidebarItem> )
                            
                        })
                    }
                    </ul>
                </div>
            </div>
        );
    };
}

export default Sidebar;
