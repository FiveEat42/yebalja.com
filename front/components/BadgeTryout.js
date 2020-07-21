// import styles from './BadgeTryout.module.css';
// import React from "react";
import styles from './Badge.module.css';
import React from "react";

const Tryout = () => {
  return (
    <div className={styles.tryout}>
      <div className={styles.badge}>
        <img src={require('../src/image/tryout badge.png')} width="30"/>
      </div>
      {/*<span className={styles.tooltip}>사전 집중교육</span>*/}
    </div>
  );
}

export default Tryout;