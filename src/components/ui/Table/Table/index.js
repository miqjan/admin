import React from 'react';
import styles from './components.pcss';
import TableHead from '../TableHead';
import TableItem from '../TableItem';

class Table extends React.Component {
    render() {
        return (
            <div className={styles.root}>
                <table>
                    <TableHead tableHead={this.props.tableHead} />
                    <TableItem tableBody={this.props.tableBody} />
                </table>
            </div>
        )
    }
}

export default Table;
