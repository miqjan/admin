import React from 'react';
import styles from './components.pcss';
import classNames from 'classnames';


class Input extends React.Component{

    state = {
        readOnly: this.props.readOnly,
    }



    changeReadOnly = () => {
        this.setState(cs => {
            return {
                readOnly: !cs.readOnly
            }
        });
    };

    render(){
        return(
            <input type="text" onDoubleClick={this.changeReadOnly} onChange={this.props.onChange} value={this.props.value} readOnly={this.state.readOnly} className={classNames(styles.root, !this.state.readOnly? styles.active: '')} />
        )
    }
}

export default Input;