import React from "react";
import styles from "./TopButton.module.css";

const TopButton = () => {

  return (
    <div>
      <a href="#top">
        <div className={styles.button} tabIndex="0" role="button" aria-label="맨 위로" title="맨 위로">
          <div className={styles.icon}>
              <img src={require('../src/image/ToTop.png')} width="16" height="24" />
          </div>
          <div className={styles.txt}>맨 위로</div>
        </div>
      </a>
    </div>
  );
}

export default TopButton;