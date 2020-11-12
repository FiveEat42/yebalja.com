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
      <div className={styles.reacts}>
        <div className={styles.circle}><img src="https://res.cloudinary.com/prvnbist/image/upload/v1492531171/XZOPuv9_eyqlr2.png" alt=""/>
        </div>
        <div className={styles.circle}><img src="https://res.cloudinary.com/prvnbist/image/upload/v1492531172/uIjLl6R_cmbnqb.png" alt=""/>
        </div>
        <div className={styles.circle}><img src="https://res.cloudinary.com/prvnbist/image/upload/v1492531178/VDM3zOV_qy9fqj.png" alt=""/>
        </div>
      </div>
    </>
  )
}