import React from 'react';
import styles from './components.pcss';
import { Input } from '../../Form';

class TableItem extends React.Component {
    render() {

        

        return (
            <tbody className={styles.root}>
                {
                    this.props.tableBody.map((item,key)=>{
                        return(
                            <tr key={key}>
                                <td>
                                    <Input
                                        tableItem
                                        readOnly={true}
                                        value={item.firstName}
                                        onChange={this.props.onChange.bind(this, key)}
                                        type="text"
                                        name="firstName"
                                    />
                                </td>
                                <td>{item.lastName}</td>
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
