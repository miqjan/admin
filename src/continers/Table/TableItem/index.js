import React from 'react';
import styles from './components.pcss';
import { Input } from '../../../components/ui/Form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Toggle from 'material-ui/Toggle';


class TableItem extends React.Component {
    render() {
        return (
            <tbody className={styles.root}>
                {
                    this.props.tableBody.map((item,key)=>{
                        return(
                            <tr key={key}>
                                    {Object.keys(item).map((itemKey,index,copy_item)=>{
                                        if(index == 0){
                                            return(
                                                <td key={index} className={styles.hiddenElement}>{item[itemKey]}</td>
                                            );  
                                        }
                                        if(copy_item.length - 1 == index){
                                            return(
                                                <td key={index}>
                                                    <MuiThemeProvider>
                                                        <Toggle

                                                            defaultToggled={!item[itemKey]}
                                                        />
                                                    </MuiThemeProvider>                                                
                                                </td>
                                            );
                                        }
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
