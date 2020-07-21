// import styles from './BadgeInterview.module.css';
// import React from "react";
import styles from './Badge.module.css';
import React from "react";

const Interview = () => {
  return (
    <div className={styles.interview}>
      <div className={styles.badge}>
        <img src={require('../src/image/interview badge.png')} width="30"/>
      </div>
      {/*<span className={styles.tooltip}>인터뷰</span>*/}
    </div>
  );
}

export default Interview;

