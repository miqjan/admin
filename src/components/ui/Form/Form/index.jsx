import React from 'react';

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

export default Form;