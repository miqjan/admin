import React from 'react';

import styles from './components.pcss';

class FormGroup extends React.Component {
	render() {
		return (
			<div className={styles.formGroup}>
				{ this.props.children }
			</div>
		)
	}		
}

export default FormGroup;