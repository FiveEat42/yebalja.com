import styles from './Title.module.css'
import PropTypes  from 'prop-types';

const Title = ({children}) => {
    return (
        <div className={styles.title}>
            {children}
        </div>
    );
}

Title.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Title;
