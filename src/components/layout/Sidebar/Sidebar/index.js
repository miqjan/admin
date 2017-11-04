import React from 'react';
import styles from './components.pcss';
import SidebarItem from '../SidebarItem';
class Sidebar extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        console.log(this.props);
        return(
            <div className={styles.root}>
                <div className={styles.menu}>
                    <ul>
                    {
                        this.props.items.map((item, key) => {
                            
                               ( <SidebarItem
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
