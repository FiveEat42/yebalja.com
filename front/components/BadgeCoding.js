import styles from './BadgeCoding.module.css';
import React from "react";

const CodingTest = () => {
  return (
    <div className={styles.coding}>
      <img src={require('../src/image/coding test badge.png')} width="40"/>
      <span class={styles.tooltip_coding}>코딩 테스트</span>
    </div>
  );
}

export default CodingTest;
