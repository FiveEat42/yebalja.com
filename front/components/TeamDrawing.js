import React from "react";
import styles from './TeamIllu.module.css';

export default function TeamIllu() {
  return (
    <>
      <div className={styles.section}>
        <img  src={require('../src/image/teamtest.png')} />
      </div>
    </>
);
}