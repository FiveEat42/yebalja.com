import styles from './Badge.module.css';
import Aptitude from '../../srcs/Badge/Aptitude.png';
import Coding from '../../srcs/Badge/Coding.png';
import Interview from '../../srcs/Badge/Interview.png';
import Tryout from '../../srcs/Badge/Tryout.png';

const Badge = ({type}) => {
  let img;
  if (type == 'Aptitude') {
    img = <img src={Aptitude} width="27" />
  } else if (type == 'Coding') {
    img = <img src={Coding} width="27" />
  } else if (type == 'Interview') {
    img = <img src={Interview} width="27" />
  } else if (type == 'Tryout') {
    img = <img src={Tryout} width="27" />
  }

  return (
    <div className={styles[type]}>
      <div className={styles.badge}>
        {img}
      </div>
    </div>

  );
}

export default Badge;
