import React from 'react';
import styles from './Header.module.css'
import PropTypes from 'prop-types';

const Header = ({children}) => {
	return (
		<div className={styles.header}>
			{children}
		</div>
	);
}

Header.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Header;
