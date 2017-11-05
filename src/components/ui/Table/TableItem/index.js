import React from 'react';
import styles from './components.pcss';

class TableItem extends React.Component {
    render() {
        return (
            <tbody className={styles.root}>
                {
                    this.props.tableBody.map((item,key)=>{
                        return(
                            <tr key={key}>
                                <td>{item.firstname}</td>
                                <td>{item.lastname}</td>
                                <td>{item.email}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        )
    }
}

export default TableItem;
