import React from 'react';
import styles from './components.pcss';

class AppContent extends React.Component{
    render(){
        return(
            <div className={styles.root}>
                {this.props.children}
            </div>
        )
    }
}

export default AppContent;