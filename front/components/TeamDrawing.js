import React from "react";
import styles from './TeamDrawing.module.css';

export default function TeamDrawing() {
  return (
    <>
      <div className={styles.section}>
        <img  src={require('../src/image/teamdrawing.png')} />
      </div>
    </>
);
}