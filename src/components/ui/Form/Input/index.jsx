import React from 'react';

import styles from './components.pcss';
import classNames from 'classnames';


class Input extends React.Component {
    state = {
        active: false,
        readOnly: this.props.readOnly,
    };

    onBlur = () => {
        this.setState({
            active: !this.state.active,
            readOnly: !this.state.readOnly
        });
    };

    onEditing = () => {
        this.setState({
            readOnly: !this.state.readOnly,
            active: !this.state.active
        });
    };

    render() {
        return (
            <input
                className={classNames(styles.root, (this.state.active) ? styles.active : '')}
                type={this.props.type}
                value={this.props.value}
                readOnly={this.state.readOnly}
                name={this.props.name}
                onBlur={this.onBlur}
                onChange={this.props.onChange}
                onDoubleClick={this.onEditing}
            />
        )
    }
}

export default Input;