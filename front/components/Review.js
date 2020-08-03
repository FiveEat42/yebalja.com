import React from "react";
import styles from './Review.module.css';
import classNames from 'classnames';
import Head from 'next/head';

export default function Review() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
      {/* left */}
      <div className={styles.wrapper}>
        <div className={styles.comment_block}>
          <img className={styles.comment_image} src="https://user-images.githubusercontent.com/37580034/87907843-53ef6f00-caa0-11ea-97a0-51865427a4db.png"/>
          <div className={styles.comment_dialog}>
            <div className={classNames({[styles.menu]: true, [styles.menu__adsila]: true})}>
              <a className={styles.menu__item} href="https://gamjatwigim.tistory.com/81?category=667070" target="_black">
                <span className={styles.menu__item_name}>부스트캠프동안 내가 배운것들</span>
              </a>
            </div>
            <i className="fa fa-quote-left" style={{ color: `white` }} aria-hidden="true"></i>
            <p className={styles.text}>부스트캠프는 최고의 서포터와 함께 하는 게임이었습니다. 저는 부스트캠프를 하면서, 각종 모든 트렌디한 기술을 시도하려는 개발자들과 함께 개발을 할 수 있었습니다.</p>
            <div className={styles.date}>
              <i className="fa fa-minus" style={{ color: `#white` }} aria-hidden="true"></i>
              <span>   2020. 06. 06.</span>
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className={styles.wrapper_r}>
        <div className={styles.comment_block_r}>
          <div className={styles.comment_dialog_r}>
            <div className={classNames({[styles.menu]: true, [styles.menu__adsila]: true})}>
              <a className={styles.menu__item} href="https://velog.io/@red/부스트-캠프-2019-참여-후기" target="_black">
                <span className={styles.menu__item_name}>부스트캠프 챌린지 후기</span>
              </a>
            </div>
            <i class="fa fa-quote-left" style={{ color: `white` }} aria-hidden="true"></i>
            <p className={styles.text_r}>또한 협업이 얼마나 중요한 의미를 갖는지, 동료들이 얼마나 중요한지도 충분히 체감할 수 있었습니다.</p>
            <div className={styles.date_r}>
              <i class="fa fa-minus" style={{ color: `#white` }} aria-hidden="true"></i>
              <span>   2020. 08. 13.</span>
            </div>
          </div>
          <img className={styles.comment_image_r} src="https://user-images.githubusercontent.com/37580034/88162009-b6d13980-cc4b-11ea-92f1-8e175e0e9475.png"/>
        </div>
      </div>
    </>
);
}