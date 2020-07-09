import styles from './Subtitle.module.css'
import PropTypes  from 'prop-types';

const Subtitle = ({children}) => {
    return (
        <div className={styles.title}>
            {children}
        </div>
    );
}

Subtitle.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Subtitle;
