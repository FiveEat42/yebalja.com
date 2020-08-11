import React from "react";
import styles from './Footer.module.css'
import Link from 'next/link';

const Footer = () => {

  return (
    <div className={styles.footer}>
      <div className={styles.list}>
        <ul>
          <li><p className={styles.wave}>💙</p></li>
          <li><Link href="/about"><a>소개</a></Link></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSe48uQfdtv7z6QL18klzsqfnY8I27Q3kOVre-apNLGNyfPTdQ/viewform">공고제보</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSdfFG9fpzXMP6WqgHsgwiWIQPpqZ44HKUJyQXjSXOmYDWcfNA/viewform">개선제보</a></li>
          <li><p className={styles.wave}>💙</p></li>
        </ul>
      </div>
      <div className={styles.copyright}>
        Copyright 2020. 예발자닷컴 All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;



