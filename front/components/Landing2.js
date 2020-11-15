import styles from './Landing2.module.css';
import classNames from 'classnames';
import Link from 'next/link';
import Header from "./Header";
// import { useDispatch, useSelector } from 'react-redux';
// import { getTableData } from '../redux/actions/tableAction';
import Head from 'next/head';
import { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Landing2() {
  let text0 = useRef(null);

  useEffect(() => {
    gsap.to(text0, {
      scrollTrigger: {
        trigger: text0,
        toggleActions: "restart pause reverse pause"
      },
      x: 400,
      duration: 3
    });

    // TweenMax.fromTo(
    //   text0,
    //   0.8,
    //   {
    //     opacity: 0,
    //     y: 0
    //   },
    //   {
    //     opacity: 1,
    //     y: -20,
    //     ease: Power3.easeOut,
    //   }
    // )
  },[])


  return (
    <>
          <section className={styles.illustration}>
              <div className={styles.text}>
                  <h1 className={styles.title}>누구나<br/>예발자 시절이 있었으니까</h1>
                  <div className={styles.text0} ref={el => text0 = el}>프로그래밍 정보,<br/>예발자닷컴에서 간편하게</div>
              </div>
          </section>


          <section className={styles.topstacks1}>
              <div className={styles.wrapper1}>
                  <div className={styles.left1}>
                      <h1>탑스택스에서<br/>알아보세요</h1>
                      <div className={styles.text1}>핵심 정보를 한눈에 파악할 수 있습니다.</div>
                      <div className={styles.more1_portrait}><Link href='#'><a>자세히 알아보기  ></a></Link></div>
                      <div className={styles.cards}>
                          <div className={styles.job}>
                              <img className={styles.cards_img} src={require('../src/image/job.png')}/>
                              <span className={styles.cards_text}>채용시 가장 많이 뽑는 언어는?</span>
                          </div>
                          <div className={styles.coding}>
                              <img className={styles.cards_img} src={require('../src/image/codingtestbadge.png')}/>
                              <span className={styles.cards_text}>코딩테스트에 가장 유리한 언어는?</span>
                          </div>
                          <div className={styles.python}>
                              <img className={styles.cards_img} src={require('../src/image/python.png')}/>
                              <span className={styles.cards_text}>파이썬의 용도는?</span>
                          </div>
                          <div className={styles.more1}><Link href='#'><a>자세히 알아보기  ></a></Link></div>

                      </div>
                  </div>
                  <div className={styles.right1}>
                    <img className={styles.top_sample} src={require('../src/image/topstacks_sample.png')}/>
                  </div>
              </div>
          </section>


          <section className={styles.topstacks2}>
              <div className={styles.wrapper2}>
                  <div className={styles.header2}>
                    <div><h1>탑스택스에서</h1></div>
                    <div><h1>투표해주세요</h1></div>
                  </div>
                  <div className={styles.text2}>당신의 스택을 투표해주세요</div>
                  <div className={styles.more2}><Link href='#'><a>투표하러 가기  ></a></Link></div>

                  <div className={styles.rankings}>
                      <div className={styles.silver}>
                          <img className={styles.two} src={require('../src/image/2.png')}/>
                          <img className={styles.silver_sample} src={require('../src/image/silver_sample.png')}/>
                          <img className={styles.silver_frame} src={require('../src/image/2frame.png')}/>
                      </div>
                      <div className={styles.gold}>
                         <img className={styles.one} src={require('../src/image/1.png')}/>
                         <img className={styles.gold_sample} src={require('../src/image/gold_sample.png')}/>
                         <img className={styles.gold_frame} src={require('../src/image/1frame.png')}/>
                      </div>
                      <div className={styles.bronze}>
                          <img className={styles.three} src={require('../src/image/3.png')}/>
                          <img className={styles.bronze_sample} src={require('../src/image/bronze_sample.png')}/>
                          <img className={styles.bronze_frame} src={require('../src/image/3frame.png')}/>
                      </div>
                  </div>
              </div>
          </section>


          <section className={styles.footer}>
            <h1>새 푸터 자리</h1>
          </section>
    </>

  );
}