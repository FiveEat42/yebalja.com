import styles from './Review.module.css';
import React from "react";
import classNames from 'classnames';
import Link from 'next/link';

export default function Review() {
    return (
      <>
      <div className={styles.wrapper}>
          <nav className={classNames({[styles.menu]: true, [styles.menu__adsila]: true})}>
            <a className={styles.menu__item} href="https://m.blog.naver.com/PostView.nhn?blogId=boostcamp_official&logNo=222009704397&navType=tl">
              <span className={styles.menu__item_name}>부스트캠프 생생후기</span>
              <span className={styles.menu__item_label}>2020. 06. 23.</span>
            </a>
            <a className={styles.menu__item} href="https://hzoou.tistory.com/286?category=807989">
              <span className={styles.menu__item_name}>부스트캠프의 협업</span>
              <span className={styles.menu__item_label}>2019. 12. 24.</span>
            </a>
            <a className={styles.menu__item} href="https://velog.io/@red/부스트-캠프-2019-참여-후기">
              <span className={styles.menu__item_name}>부스트캠프 멤버쉽 코스 후기</span>
              <span className={styles.menu__item_label}>2019. 08. 13.</span>
            </a>
            <a className={styles.menu__item} href="https://velog.io/@wan088/2019-08-12-2108-작성됨-gzjz8d1wqz">
              <span className={styles.menu__item_name}>개인적으로 뽑은 부스트캠프 장단점</span>
              <span className={styles.menu__item_label}>2019. 08. 13.</span>
            </a>
            <a className={styles.menu__item} href="https://gamjatwigim.tistory.com/81?category=667070">
              <span className={styles.menu__item_name}>부스트캠프동안 내가 공부한 것들</span>
              <span className={styles.menu__item_label}>2019. 2. 28.</span>
            </a>
          </nav>
        </div>
      </>
  );
}