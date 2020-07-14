import styles from './Review.module.css';
import React from "react";
import classNames from 'classnames';
import Link from 'next/link';

export default function Review() {
    return (
      <>
        <div classNmae={styles.slider}>
          
          <a href="#slide-1">1</a>
          <a href="#slide-2">2</a>
          <a href="#slide-3">3</a>
          <a href="#slide-4">4</a>
          <a href="#slide-5">5</a>

          <div className={styles.slides}>
            <div id="slide-1">
              1
            </div>
            <div id="slide-2">
              2
            </div>
            <div id="slide-3">
              3
            </div>
            <div id="slide-4">
              4
            </div>
            <div id="slide-5">
              5
            </div>
          </div>
        </div>
      </>
  );
}