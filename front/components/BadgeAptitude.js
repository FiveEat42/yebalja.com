import styles from './BadgeAptitude.module.css';
import React from "react";


const Aptitude = () => {
  return (
    <div className={styles.aptitude}>
      <img src={require('../src/image/aptitude badge.png')} width="40"/>
      <span class={styles.tooltip_aptitude}>적성검사</span>
    </div>
  );
}

export default Aptitude;

