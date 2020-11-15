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
  let topstacks1, wrapper1, left1, header1, text1, more1, more1_portrait = useRef(null);
  let job, coding, python, top_sample = useRef(null);
  let topstacks2, wrapper2, upper_area, header2, text2, more2 = useRef(null);
  let rankings2, gold_sample, silver_sample, bronze_sample = useRef(null);
  let gold, silver, bronze, one, two, three = useRef(null);


  useEffect(() => {
    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: left1,
        start: 'top bottom',
        end: 'bottom top',
        markers: true,
        toggleActions: 'restart none restart none'
      }
    });

    let tl1_header = gsap.timeline({
      scrollTrigger: {
        trigger: header1,
        start: 'top bottom',
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

    tl1_header.fromTo(left1,
      {y: 50, opacity: 0},
      {duration: 1.5, y: 0, opacity: 1}
      )
    let tl2_header = gsap.timeline({
      scrollTrigger: {
        trigger: upper_area,
        start: 'top bottom'
      }
    });

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: upper_area,
        start: 'top bottom',
        end: 'bottom top',
        markers: true,
        toggleActions: 'restart none restart none'
      }
    });

    let tl2_rankings = gsap.timeline({
      scrollTrigger: {
        trigger: rankings2,
        start: 'top bottom',
        end: 'bottom top',
      }
    });

    tl2_header.fromTo(header2,
      {y: 50, opacity: 0},
      {duration: 1.5, y: 0, opacity: 1}
      )

    tl2.fromTo(text2,
      {y: 30, opacity: 0},
      {duration:1.5, y: 0, opacity: 1},
      )
      .fromTo(more2,
      {y: 30, opacity: 0},
      {duration: 1.5, y:0, opacity: 1},
      '-=1.5'
      )

    tl2_rankings.fromTo(rankings2,
      {y: 50, opacity: 0},
      {duration: 1.5, y: 0, opacity: 1}
    )

    let tl_number = gsap.timeline(
      {
        repeat: -1,
        yoyo: true
    });

    tl_number.to(one, 0.5, {y: -10});

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