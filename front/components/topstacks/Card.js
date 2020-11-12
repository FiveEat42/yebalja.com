import React, { useEffect } from "react";
import styles from './Card.module.css';
import classNames from 'classnames';
import Head from 'next/head';
import { useSelector, useDispatch } from "react-redux";
import LikeButton from "./LikeButton";

export default function Card() {

  return (
    <>
    <div className={styles.body}>
      <section className={styles.cards_wrapper}>
        <div className={styles.card_grid_space}>
          <img className={styles.medal} src="https://user-images.githubusercontent.com/37580034/98777799-b647f300-2434-11eb-8795-baf921335b63.png" />
          <div></div>
          <a className={styles.card}>
            <div>
              <img className={styles.logo} src="https://user-images.githubusercontent.com/37580034/98778872-581c0f80-2436-11eb-8958-e9705a01ce71.png" />
              <div className={styles.title}>Python</div>
              <div className={styles.sub_title}>빠르고 쉬워 가장 인기있는 언어</div>
              <div className={styles.tags}>
                <div className={styles.tag}>채용공고 1위</div>
                <div className={styles.tag}>튜토리얼검색량 3위</div>
                <div className={styles.tag}>깃헙 1위</div>
              </div>
              <div className={styles.contents}>
                <div className={styles.content}><strong>파이썬</strong>은 AI, 머신러닝, 딥러닝, 자료 분석, 웹 사이트 제작 및 게임 등에 사용됩니다.</div>
                <div className={styles.content}><strong>장점</strong><br />배우기 쉽다, 가독성이 좋다, 수요가 많다.</div>
                <div className={styles.content}><strong>단점</strong><br />느리다, 앱 개발에 부적합하다.</div>
                <div className={styles.content}><strong>Youtube, Instagram, 문명IV, FreeCAD</strong><br />이 파이썬으로 개발되었습니다.</div>
              </div>
            </div>
          </a>
          <LikeButton/> 
        </div>
      </section>
    </div>
    </>
  );
}