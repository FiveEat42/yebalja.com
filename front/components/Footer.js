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
            <Link href="/about"><a>1.일러스트_컬러</a></Link>
          </li>
          <li>
            <Link href="/about2"><a>2.일러스트_화이트</a></Link>
          </li>
          {/* <li>
            <Link href="/about3"><a>3.사진_컬러</a></Link>
          </li> */}
          <li>
            <Link href="/about4"><a>4.사진_흑백조</a></Link>
          </li>
          <li>
            <Link href="/about5"><a>5.사진_회색조</a></Link> 
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



