import styles from './Jumbotronself.module.css'
import Navbar from './NavBar';


const Jumbo = () => {
  return (
    <>
      <div class={styles.box}>
        <container className={styles.container}>
          <img className={styles.image} src={require('../pages/illustration.png')} width="600px"/>
          <div className={styles.text}>
            <h1 className={styles.title}>누구나<br/>예발자 시절이 있었으니까,</h1>
            <p className={styles.content}>예비개발자를 위한 코딩교육과정,<br/>부트캠프를 만나보세요.</p>
          </div>
        </container>
      </div>
    </>
  );
}

export default Jumbo;