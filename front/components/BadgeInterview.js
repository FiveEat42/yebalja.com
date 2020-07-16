import styles from './BadgeInterview.module.css';
import React from "react";


const Interview = () => {
  return (
    <div className={styles.interview}>
      <img src={require('../src/image/interview badge.png')} width="40"/>
      <span class={styles.tooltip_interview}>면접</span>
    </div>
  );
}

export default Interview;

