import styles from '../components/TextLogo.module.css'

const TextLogo = () =>{
  return (
    <div className={styles.box}>
      <h2 className={styles.logo}>예발자닷컴</h2>
      <span className={styles.content}>예비개발자에게 필요한 정보를 제공합니다.</span>
    </div>
  );
}

export default TextLogo;