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
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import React from 'react';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function Landing2() {
  let text0 = useRef(null);
  let topstacks1, wrapper1, left1, header1, text1, more1, more1_portrait = useRef(null);
  let job, coding, python, top_sample = useRef(null);
  let topstacks2, wrapper2, upper_area, header2, text2, more2 = useRef(null);
  let rankings2, gold_sample, silver_sample, bronze_sample = useRef(null);
  let gold, silver, bronze, one, two, three = useRef(null);
  let like, like1, like2, like3, like4, like5 = useRef(null);


  useEffect(() => {
    /*
    topstacks1 animation
     */
    /*
    topstacks1 header
     */
    let tl1_header = gsap.timeline({
      scrollTrigger: {
        trigger: header1,
        start: 'top bottom',
      }
    });

    tl1_header.fromTo(left1,
      {y: 50, opacity: 0},
      {duration: 1.5, y: 0, opacity: 1}
      )
    /*
    topstakcs1 text, cards, sample => restart
     */
    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: left1,
        start: 'top bottom',
        end: 'bottom top',
        markers: true,
        toggleActions: 'restart none restart none'
      }
    });
        tl1.fromTo(top_sample,
      {y: 50, opacity: 0},
      {duration: 1.5, y: 0, opacity: 1},
      )
      .fromTo(job,
    {x: 100, opacity: 0},
    {duration: 1.5, x: 0, opacity: 1},
      '-=1'
    )
      .fromTo(coding,
      {x: 100, opacity: 0},
      {duration: 1.5, x: 0, opacity: 1},
      '-=1'
    )
      .fromTo(python,
      {x: 100, opacity: 0},
      {duration: 1.5, x: 0, opacity: 1},
      '-=1'
    )


    /*
    topstacks2 animation
     */
    /*
    topstacks2 subheader and more => restart
     */
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: text2,
        start: 'top bottom',
        end: 'bottom top',
        markers: true,
        toggleActions: 'restart none restart none'
      }
    });

    tl2.fromTo([text2, more2],
      {y: 50, opacity: 0},
      {duration:1.5, y: 0, opacity: 1}
      )

    /*
    topstacks2 header
     */
    let tl2_header = gsap.timeline({
      scrollTrigger: {
        trigger: topstacks2,
        start: 'top bottom'
      }
    });

    tl2_header
    // .fromTo(topstacks2,
    //   {opacity: 0},
    //   {opacity: 1, duration: 1.5}
    //   )
    .fromTo(header2,
      {y: 50, opacity: 0},
      {duration: 1.5, y: 0, opacity: 1},
      '-=1.5'
      )

    /*
    topstacks2 likes => restart
     */
    let tl2_like = gsap.timeline(
      {
        scrollTrigger: {
          trigger: rankings2,
          start: 'top bottom',
          toggleActions: 'restart none restart none'
        },
      }
    );
    // let hearts = [like, like1, like2, like3, like4, like5]
    // for (let i = 0; i < 600; i++) {
    //     let size = Math.random() * 0.8 + 0.2;
    //     let heart = hearts[i % 6];
    //     let x = (i % 100 == 0) ? Math.random() * 15 + 270 : Math.random() * 5 + 10;
    //     let y = (i % 100 == 0) ? 50 : 90;
    //     let duration = (i % 100 == 0) ? 4 : 1;
    //     let y_to = (i % 100 == 0) ? -120 : -80;
    //     tl2_like
    //     .fromTo(heart,
    //       {x: x, y: y, opacity: 1},
    //       {duration: duration, x: x, y: y_to, opacity: 0, scale: size}, Math.random() * 2
    //     )
    // }
    let hearts = [like, like1, like2, like3]
    for (let i = 0; i < 60; i++) {
        let size = Math.random() * 0.8 + 0.2;
        let heart = hearts[i % 4];
        tl2_like
        .fromTo(heart,
          {x: Math.random() * 5 + 10, y: 90, opacity: 1},
          {duration: 1, y: -80, opacity: 0, scale: size}, Math.random() * 2
        )
    }
    let tl2_like_gold = gsap.timeline(
      {
        scrollTrigger: {
          trigger: rankings2,
          start: 'top bottom',
          toggleActions: 'restart none restart none'
        },
      }
    );
    tl2_like_gold
      .fromTo(like4,
      {x: Math.random() * 15 + 250, y: 50, opacity: 1},
      {duration: 2, y: -120, scale: 0.7, opacity: 0, repeatDelay: 0, repeat: 1}
      )
      .fromTo(like5,
        {x: Math.random() * 15 + 250, y: 50, opacity: 1},
        {duration: 2, y: -120, scale: 0.7, opacity: 0}, '-=3.5'
      )

    /*
    topstacks2 rankings & change in rankings => restart
     */
    let tl2_rankings = gsap.timeline({
      scrollTrigger: {
        trigger: rankings2,
        start: 'top bottom',
        end: 'bottom top',
        toggleActions: 'restart none restart none',
      }
    });
    tl2_rankings.fromTo(rankings2,
      {y: 50, opacity: 0},
      {duration: 1.5, y: 0, opacity: 1}
    )
    .add(tl2_like, '-=0.5')
    .add(tl2_like_gold)
    .to(gold_sample, {
      duration: 2,
      motionPath: {
        path: [{x: -130, y: 170}, {x: -263, y: 73}],
      },
      delay: 3
     })
    .to(silver_sample, {
      duration: 2,
      motionPath: {
        path: [{x: 120, y: -70}, {x: 261, y: -1}],
      },
      delay: -2
    })

    /*
    topstacks2 one, two, three hanging tween
     */
    gsap.to(one, {y: -10, duration: 0.5, repeat: -1, yoyo: true});
    gsap.to(two, {y: -10, duration: 0.5, repeat: -1, yoyo: true, delay: 0.2});
    gsap.to(three, {y: -10, duration: 0.5, repeat: -1, yoyo: true, delay: 0.4});





  },[])


  return (
    <>
          <section className={styles.illustration}>
              <div className={styles.text}>
                  <h1 className={styles.title}>누구나<br/>예발자 시절이 있었으니까</h1>
                  <div className={styles.text0} ref={el => text0 = el}>프로그래밍 정보,<br/>예발자닷컴에서 간편하게</div>
              </div>
          </section>


          <section className={styles.topstacks1} ref={el => topstacks1 = el}>
              <div className={styles.wrapper1} ref={el => wrapper1 = el}>
                  <div className={styles.left1} ref={el => left1 = el}>
                      <h1 ref={el => header1 = el}>탑스택스에서<br/>알아보세요</h1>
                      <div className={styles.text1} ref={el => text1 = el}>핵심 정보를 한눈에 파악할 수 있습니다.</div>
                      <div className={styles.more1_portrait} ref={el => more1_portrait = el}><Link href='#'><a>자세히 알아보기  ></a></Link></div>
                      <div className={styles.cards}>
                          <div className={styles.job} ref={el => job = el}>
                              <img className={styles.cards_img} src={require('../src/image/job.png')}/>
                              <span className={styles.cards_text}>채용시 가장 많이 뽑는 언어는?</span>
                          </div>
                          <div className={styles.coding} ref={el => coding = el}>
                              <img className={styles.cards_img} src={require('../src/image/codingtestbadge.png')}/>
                              <span className={styles.cards_text}>코딩테스트에 가장 유리한 언어는?</span>
                          </div>
                          <div className={styles.python} ref={el => python = el}>
                              <img className={styles.cards_img} src={require('../src/image/python.png')}/>
                              <span className={styles.cards_text}>파이썬의 용도는?</span>
                          </div>
                          <div className={styles.more1} ref={el => more1 = el}><Link href='#'><a>자세히 알아보기  ></a></Link></div>

                      </div>
                  </div>
                  <div className={styles.right1}>
                    <img className={styles.top_sample} ref={el => top_sample = el} src={require('../src/image/topstacks_sample.png')}/>
                  </div>
              </div>
          </section>


          <section className={styles.topstacks2} ref={el => topstacks2 = el}>
              <div className={styles.wrapper2} ref={el => wrapper2 = el}>
                <div className={styles.uppper_area} ref={el => upper_area = el}>
                  <div className={styles.header2} ref={el => header2 = el}>
                    <div><h1>탑스택스에서</h1></div>
                    <div><h1>투표해주세요</h1></div>
                  </div>
                  <div className={styles.text2} ref={el => text2 = el}>당신의 스택을 투표해주세요</div>
                  <div className={styles.more2} ref={el => more2 = el}><Link href='#'><a>투표하러 가기  ></a></Link></div>
                  </div>

                  <div className={styles.rankings} ref={el => rankings2 = el}>
                      <div className={styles.silver} ref={el => silver = el}>
                          <div className={styles.likes}>
                            <img ref={el => like = el} src={require('../src/image/like.png')}/>
                            <img ref={el => like1 = el} src={require('../src/image/like.png')}/>
                            <img ref={el => like2 = el} src={require('../src/image/like.png')}/>
                            <img ref={el => like3 = el} src={require('../src/image/like.png')}/>
                            <img ref={el => like4 = el} src={require('../src/image/like.png')}/>
                            <img ref={el => like5 = el} src={require('../src/image/like.png')}/>
                          </div>
                          <img className={styles.two} ref={el => two = el} src={require('../src/image/2.png')}/>
                          <img className={styles.silver_sample} ref={el => silver_sample = el} src={require('../src/image/silver_sample.png')}/>
                          <img className={styles.silver_frame} src={require('../src/image/2frame.png')}/>
                      </div>
                      <div className={styles.gold} ref={el => gold = el}>
                         <img className={styles.one} ref={el => one = el} src={require('../src/image/1.png')}/>
                         <img className={styles.gold_sample} ref={el => gold_sample = el} src={require('../src/image/gold_sample.png')}/>
                         <img className={styles.gold_frame} src={require('../src/image/1frame.png')}/>
                      </div>
                      <div className={styles.bronze} ref={el => bronze = el}>
                          <img className={styles.three} ref={el => three = el} src={require('../src/image/3.png')}/>
                          <img className={styles.bronze_sample} ref={el => bronze_sample = el} src={require('../src/image/bronze_sample.png')}/>
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