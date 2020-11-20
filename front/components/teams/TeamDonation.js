import React from "react";
import styles from './TeamDonation.module.css';

export default function TeamDonation() {
  return (
    <>
      <section className={styles.container}>
          <img className={styles.menu} src={require('../../srcs/teams/donation_menu.png')} alt="" />
          <img className={styles.code} src={require('../../srcs/teams/donation_code.png')} alt="" />
      </section>
    </>
  );
}