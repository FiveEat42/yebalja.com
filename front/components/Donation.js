import React from "react";
import styles from './Donation.module.css';

export default function Donation() {
  return (
    <>
      <section className={styles.container}>
          <img className={styles.menu} src={require('../src/image/donation_menu.png')} alt="" />
          <img className={styles.code} src={require('../src/image/donation_code.png')} alt="" />
      </section>
    </>
  );
}