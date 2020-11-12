import React from "react";
import styles from './Footer.module.css'
import Link from 'next/link';

const Logo = () => {
  return (
    <svg height="14" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.99524 10.2009H10.8499V19.3058C10.8499 19.3989 10.7745 19.4744 10.6813 19.4744V19.4744C9.75013 19.4744 8.99524 18.7195 8.99524 17.7883V10.2009Z" fill="white"/>
      <path d="M12.7047 6.49146L10.85 8.0494V19.4744V19.4744C11.8743 19.4744 12.7047 18.644 12.7047 17.6197V6.49146Z" fill="white"/>
      <path d="M10.85 5.425C10.85 2.42885 13.2788 0 16.275 0V0V4.17308L10.85 8.34615V5.425Z" fill="white"/>
      <path d="M21.7 4.17308C21.7 6.47781 19.8316 8.34616 17.5269 8.34616H10.85L16.275 4.17308H21.7V4.17308Z" fill="white"/>
      <path d="M16.275 0H21.7L16.275 4.17308V0Z" fill="white"/>
      <path d="M21.7 0V4.17308H16.275L21.7 0Z" fill="white"/>
      <path d="M10.85 7.2797C10.85 4.28356 8.42112 1.85471 5.42498 1.85471V1.85471V6.02778L10.85 10.2009V7.2797Z" fill="white"/>
      <path d="M0 6.02779C0 8.33252 1.86835 10.2009 4.17308 10.2009H10.85L5.425 6.02779H0V6.02779Z" fill="white"/>
      <path d="M5.42493 1.85471H-7.34329e-05L5.42493 6.02778V1.85471Z" fill="white"/>
      <path d="M-7.34329e-05 1.85471V6.02778H5.42493L-7.34329e-05 1.85471Z" fill="white"/>
    </svg>
  )
}

const Footer = () => {

  return (
    <div className={styles.footer}>
      <div className={styles.list}>
        <ul>
          <li><p className={styles.wave}><Logo /></p></li>
          <li><Link href="/about"><a>팀소개</a></Link></li>
          <li><Link href="/topstacks"><a>Top Stacks</a></Link></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/FiveEat42/yebalja.com">깃허브</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSe48uQfdtv7z6QL18klzsqfnY8I27Q3kOVre-apNLGNyfPTdQ/viewform">공고제보</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSdfFG9fpzXMP6WqgHsgwiWIQPpqZ44HKUJyQXjSXOmYDWcfNA/viewform">개선제보</a></li>
          <li><p className={styles.wave}><Logo /></p></li>
        </ul>
      </div>
      <div className={styles.copyright}>
        Copyright 2020. 예발자닷컴 All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;