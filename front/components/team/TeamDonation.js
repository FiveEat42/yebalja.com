import React from "react";
import styles from "./TeamDonation.module.css";

export default function TeamDonation() {
  return (
    <>
      <section className={styles.container}>
        <img
          className={styles.menu}
          src={require("../../src/image/donation_menu.png")}
          alt=""
        />
        <img
          className={styles.code}
          src={require("../../src/image/donation_code.png")}
          alt=""
        />
      </section>
    </>
  );
}
