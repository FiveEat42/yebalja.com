// import styles from './BadgeCoding.module.css';
import styles from './Badge.module.css';
import React from "react";

const CodingTest = () => {
  return (
    <div className={styles.coding}>
      <div className={styles.badge}>
        <img src={require('../src/image/coding test badge.png')} width="27"/>
      </div>
      {/*<span className={styles.tooltip}>코딩 테스트</span>*/}
    </div>
  );
}

export default CodingTest;
