import React, { useEffect } from "react";
import styles from './Stacks.module.css';
import classNames from 'classnames';
import Head from 'next/head';

export default function Medal() {
  return (
    <>
      <img className={styles.medal} src="https://user-images.githubusercontent.com/37580034/98777799-b647f300-2434-11eb-8795-baf921335b63.png" />
    </>
  )
}