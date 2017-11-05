import React from 'react';
import SidebarItem from '../SidebarItem';

import styles from './components.pcss';

class Sidebar extends React.Component {
  render() {
    return(
      <div className={styles.root}>
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
