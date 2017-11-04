import React from 'react';
import styles from './components.pcss';

class TableHead extends React.Component {
    render() {
        return (
            <thead className={styles.root}>
            {this.props.children}
            </thead>
        )
    }
}

export default TableHead;