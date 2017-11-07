import React from 'react';
import styles from './components.pcss';

class TableHead extends React.Component {
    render() {
        return (
            <thead className={styles.root}>
                <tr>
                    {
                     this.props.tableHead.map((item,key) => {
                        return(
                            <th key={key} >{item}</th>
                        );
                     })   
                    }
                </tr>
            </thead>
        )
    }
}

export default TableHead;
