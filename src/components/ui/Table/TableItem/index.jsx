import React from 'react';
import styles from './components.pcss';

class TableItem extends React.Component {
    render() {
        return (
            <tbody className={styles.root}>
            {this.props.children}
            </tbody>
        )
    }
}

export default TableItem;