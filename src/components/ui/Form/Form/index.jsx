import React from 'react';
import PropTypes from 'prop-types';

import styles from './components.pcss';

class Form extends React.Component {
	render() {
		return (
			<form className={styles.root}>
				{this.props.children}
			</form>
		);
	}
}
Form.propTypes = {
	children: PropTypes.any.isRequired
}

export default Form;