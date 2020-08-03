import styles from './Table.module.css';

const Badge = () => {

  return (
        <div className={styles.badges}>
            <div className={styles.badge}>
              <img src={require('../src/image/Tryout.png')} width="27"/>
              <span className={styles.tooltip}>사전집중교육</span>
            </div>

            <div className={styles.badge}>
              <img src={require('../src/image/Interview.png')} width="27"/>
              <span className={styles.tooltip}>면접</span>
            </div>
          <div className={styles.badge}>
            <img src={require('../src/image/Coding.png')} width="27"/>
            <span className={styles.tooltip}>코딩테스트</span>
          </div>

          <div className={styles.badge}>
            <img src={require('../src/image/Aptitude.png')} width="27"/>
            <span className={styles.tooltip}>적성검사</span>
          </div>
        </div>

  );
}

export default Badge;
