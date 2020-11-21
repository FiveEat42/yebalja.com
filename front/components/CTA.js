import styles from "./CTA.module.css";
import React from "react";
import classNames from 'classnames';

const CTA = () => {
  return (
    <div className={styles.box}>
      <div className={styles.group}>
        <div className={classNames({[styles.cta]: true, [styles.ctabox]: true})}>
          <span className={styles.Hi}> 자세히 </span>
        </div>
        <div className={styles.imgbox}>
          <img className={styles.image} src={require('../srcs/CTA/pointerpurple.png')}/>
        </div>
      </div>
    </div>
  );
}

export default CTA;
