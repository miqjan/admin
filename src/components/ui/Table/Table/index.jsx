import React from 'react';
import styles from './components.pcss';

class Table extends React.Component {
    render() {
        return (
            <div className={styles.root}>
                <table>
                    {this.props.children}
                </table>
            </div>
        )
    }
}

export default Table;