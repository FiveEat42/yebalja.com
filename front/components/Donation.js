import React from "react";
import styles from './Donation.module.css';

export default function Donation() {
  return (
    <>
      <div className={styles.section}>
        <img  src={require('../src/image/donation.png')} />
      </div>
    </>
);
}