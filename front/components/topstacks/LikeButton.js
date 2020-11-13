import React, { useEffect, useState } from "react";
import styles from './LikeButton.module.css';
import classNames from 'classnames';
import Head from 'next/head';
import { useSelector, useDispatch } from "react-redux";

export default function LikeButton() {
  const [num, setNum] = useState(0);

  const onIncrease = () => {
    setNum(num + 1);
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
      <div className={styles.container}>
        <div className={styles.button_container}>
          <div className={styles.a}>
            <i className={classNames({ ["fa fa-heart"]: true})}/> Like
          </div>
        </div>
        <div className={styles.button_container}>
          <div className={styles.a}>
            <i className={classNames({ ["fa fa-heart-o"]: true})}/> Dislike
          </div>
        </div>
      </div>
    </>
  )
}