import styles from './Badge.module.css';
import React from "react";


const Aptitude = () => {
  return (
    <div className={styles.aptitude}>
      <div className={styles.badge}>
        <img src={require('../src/image/aptitude badge.png')} width="40"/>
      </div>
      {/*<span class={styles.tooltip}>적성검사</span>*/}
    </div>
  );
}

export default Aptitude;

