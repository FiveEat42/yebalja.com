import React from "react";
import styles from './Footer.module.css'
import Link from 'next/link';

const Footer = () => {

  return (
    <div className={styles.footer}>
      <div className={styles.list}>
        <ul className={styles.item}>
          <li><p className={styles.wave}>👋</p></li>
          <li>
            <Link href="/about"><a>(일러)컬러  </a></Link>
          </li>
          <li>
            <Link href="/about2"><a>(일러)화이트  </a></Link>
          </li>
          <li>
            <Link href="/about3"><a>텍스트  </a></Link>
          </li>
          <li>
            <Link href="/about4"><a>(사진)흑백  </a></Link>
          </li>
          <li>
            <Link href="/about5"><a>(사진)회색조  </a></Link> 
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



