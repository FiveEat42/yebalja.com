import styles from './Footer.module.css'
import Link from 'next/link';

const Footer = () => {

  return (
    <div className={styles.footer}>
      <div className={styles.list}>
        <ul className={styles.item}>
          <li><p className={styles.wave}>👋</p></li>
          <li>
            <Link href="/about"><a>1번.일러컷</a></Link>
          </li>
          <li>
            <Link href="/about2"><a>2번.색O</a></Link>
          </li>
          <li>
            <Link href="/about3"><a>3번.흑백</a></Link>
          </li>
          <li>
            <Link href="/about4"><a>4번.회색조</a></Link>
          </li>
          <li>
            <Link href="/about5"><a>5번.구현전</a></Link>
          </li>
          <li><p className={styles.wave}>👋</p></li>
        </ul>
      </div>
      <div className={styles.copyright}>
        Copyright 2020. 예발자닷컴 All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;



