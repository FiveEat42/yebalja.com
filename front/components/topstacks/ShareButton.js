import React, { useEffect, useState } from "react";
import styles from './ShareButton.module.css';
import classNames from 'classnames';
import Head from 'next/head';
import { useSelector, useDispatch } from "react-redux";

export default function ShareButton() {

  return (
    <>
      <Head>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css" />
      </Head>
      <div className={styles.share_button}>
        <span><i className={"xi-share-alt-o"}/></span>
        <a href="#"><i className={"xi-facebook"}/></a>
        <a href="#"><i className={"xi-twitter"}/></a>
        <a href="#"><i className={"xi-instagram"}/></a>
        <a href="#"><i className={"xi-kakaotalk"}/></a>
      </div>
    </>
  )
}