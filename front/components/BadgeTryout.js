import styles from './BadgeTryout.module.css';
import React from "react";


const Tryout = () => {
  return (
    <div className={styles.tryout}>
      <img src={require('../src/image/tryout badge.png')} width="40"/>
      <span class={styles.tooltip_tryout}>사전 집중교육</span>
    </div>
  );
}

export default Tryout;