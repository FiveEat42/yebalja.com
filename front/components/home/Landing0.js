import styles from './Landing0.module.css'
import IllustrationLogo from './IllustrationLogo';
import Illustration from './Illustration';

const Landing0 = () => {
  return (
    <>
      <section className={styles.illustration}>
        <div className={styles.wrapper}>
          <div className={styles.up}>
            <div className={styles.logos_container}>
              <IllustrationLogo/>
            </div>
            <div className={styles.image_container}>
              <Illustration/>
            </div>
          </div>
          <div className={styles.down}>
            <div className={styles.text}>
              <h1 className={styles.title}>누구나<br/>예발자 시절이 있었으니까</h1><br/>
              <p className={styles.content}>코딩, 어떻게 시작할지 고민된다면 <br/>교육비 걱정없는 부트캠프를 비교해보세요</p>
            </div>

          </div>
        </div>

      </section>
    </>
  );
}

export default Landing0;