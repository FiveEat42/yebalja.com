import styles from "./CTA.module.css";
import React from "react";

const CTA = () => {
  return (
    <div className={styles.box}>
      <div className={styles.group}>
        <div className={styles.cta}>
          <span className={styles.Hi}>  Hi </span>
        </div>
        <div className={styles.imgbox}>
          <img className={styles.image} src={require('../src/image/pointer.png')}/>
        </div>
      </div>
    </div>
  );
}

export default CTA;
