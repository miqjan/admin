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
                                
                                    {Object.keys(item).map((itemKey,index)=>{
                                       
                                        return(
                                            <td key={index}>
                                                <Input
                                                    tableItem
                                                    readOnly={true}
                                                    value={item[itemKey]}
                                                    onChange={this.props.onChange.bind(this, key)}
                                                    type="text"
                                                    name={itemKey}
                                                />

                                            </td>

                                        );  
                                    })}
                                    
                                
                                
                            </tr>
                        );
                    })
                }
            </tbody>
        )
    }
}


export default TableItem;
