import styles from './Review.module.css';
import React from "react";
import classNames from 'classnames';
import Link from 'next/link';

export default function Review() {
    return (
      <>

        <nav className={classNames({[styles.menu]: true, [styles.menu__adsila]: true})}>
          <a className={styles.menu__item} href="#">
            <span className={styles.menu__item_name}>Artists</span>
            <span className={styles.menu__item_label}>Explore all artists' portfolios</span>
          </a>
          <a className={styles.menu__item} href="#">
            <span className={styles.menu__item_name}>Exhibitions</span>
            <span className={styles.menu__item_label}>Discover their stories</span>
          </a>
          <a className={styles.menu__item} href="#">
            <span className={styles.menu__item_name}>Schedule</span>
            <span className={styles.menu__item_label}>View our event calendar</span>
          </a>
          <a className={styles.menu__item} href="#">
            <span className={styles.menu__item_name}>Mission</span>
            <span className={styles.menu__item_label}>Read our mission statement</span>
          </a>
          <a className={styles.menu__item} href="#">
            <span className={styles.menu__item_name}>The Gardens</span>
            <span className={styles.menu__item_label}>Get to know our eco village</span>
          </a>
          <a className={styles.menu__item} href="#">
            <span className={styles.menu__item_name}>Buy Tickets</span>
            <span className={styles.menu__item_label}>Purchase event tickets online</span>
          </a>
          <a className={styles.menu__item} href="#">
            <span className={styles.menu__item_name}>Contact</span>
            <span className={styles.menu__item_label}>Get in touch and find us</span>
          </a>
        </nav>
      </>
  );
}