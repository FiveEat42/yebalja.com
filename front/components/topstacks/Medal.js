import React, { useEffect, useState } from "react";
import styles from './Stacks.module.css';
import classNames from 'classnames';
import Head from 'next/head';

export default function Medal( {data} ) {
  const medal_src = {
    gold: "https://user-images.githubusercontent.com/37580034/98777799-b647f300-2434-11eb-8795-baf921335b63.png",
    silver: "",
    bronze: ""
  }
  
  return (
    <>
      <img className={styles.medal} src={medal_src.gold}/>
    </>
  )
}