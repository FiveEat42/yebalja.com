import styles from './Table.module.css';

const Badge = () => {

  return (
        <div className={styles.badges}>
            <div className={styles.badge}>
              <img src={require('../../srcs/Badge/Tryout.png')} width="27"/>
              <span className={styles.tooltip}>사전집중교육</span>
            </div>

            <div className={styles.badge}>
              <img src={require('../../srcs/Badge/Interview.png')} width="27"/>
              <span className={styles.tooltip}>면접</span>
            </div>
          <div className={styles.badge}>
            <img src={require('../../srcs/Badge/Coding.png')} width="27"/>
            <span className={styles.tooltip}>코딩테스트</span>
          </div>

          <div className={styles.badge}>
            <img src={require('../../srcs/Badge/Aptitude.png')} width="27"/>
            <span className={styles.tooltip}>적성검사</span>
          </div>
        </div>

  );
}

export default Badge;
