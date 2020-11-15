import React, { useEffect } from "react";
import styles from './Stacks.module.css';
import classNames from 'classnames';
import Head from 'next/head';
import { useSelector, useDispatch } from "react-redux";
import LikeButton from "./LikeButton";
import ShareButton from "./ShareButton";
import Medal from "./Medal";
import Header from "../Header";


export function Tags( {tags, i, color} ) {

  return (
    <>
      <div className={styles.tag} style={{backgroundColor : color[i]}}>{tags}</div>
    </>
  )
}

export function Contents( {content} ) {

  return (
    <>
      <div className={styles.content}><strong>{content.highlight}</strong><br/>{content.content.split('\n').map( line => {
        return (<span>{line}<br/></span>)
      })}</div>
    </>
  )
}

export function Card( {data} ) {
  return(
    <>
    <div>
      <div className={styles.header}>
        <LikeButton like={data.like} dislike={data.dislike}/> 
        {/* <ShareButton/> */}
      </div>
      <Medal/>
      <a className={styles.card}>
        <div className={styles.section}>
          <img className={styles.logo} src={data.logo}/>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.sub_title}>{data.sub_title}</div>
          <div className={styles.tags}>
            {data.tags.map((v, idx, i) => <Tags tags={v} key={idx} i={idx} color={data.tags_color}/>)}
          </div>
          <div className={styles.contents}>
            {data.contents.map((v, idx) => <Contents content={v} key={idx}/>)}
          </div>
        </div>
      </a>
    </div>
    </>
  );
}

export function CardList( {cardList} ){
  const sortingField = "like";

  const sortedCardList = cardList.slice().sort(
    (a, b) => b[sortingField] - a[sortingField]
    ); //원본배열 복사 후 like 순으로 내림차순 정렬

  return (
    <>
      {sortedCardList.map((v, idx) => <Card data={v} key={idx}/>)}
    </>
  );
}

export default function Stacks() {

  const cardList = [
    {
      title: "Python",
      sub_title: "빠르고 쉬워 가장 인기있는 언어",
      logo: "https://user-images.githubusercontent.com/37580034/98778872-581c0f80-2436-11eb-8958-e9705a01ce71.png",
      tags: [
        "채용공고 1위",
        "튜토리얼검색량 3위",
        "깃헙 1위"
      ],
      tags_color: ["#387EB8", "#FFE052", "#67707D"],
      contents: [
        {
          highlight: "파이썬",
          content: "은 AI, 머신러닝, 딥러닝, 자료 분석, 웹 사이트 제작 및 게임 등에 사용됩니다.",
        },
        {
          highlight: "장점",
          content: "배우기 쉽다, 가독성이 좋다, 수요가 많다.",
        },
        {
          highlight: "단점",
          content: "느리다, 앱 개발에 부적합하다.",
        },
        {
          highlight: "Youtube, Instagram, 문명IV, FreeCAD",
          content: "이 파이썬으로 개발되었습니다.",
        },
      ],
      like: 50,
      dislike: 10,
    }, {
      title: "Javascript",
      sub_title: "웹 사이트 프론트엔트 개발의 핵심 언어",
      logo: "https://user-images.githubusercontent.com/37580034/98778731-1d19dc00-2436-11eb-8ead-54f4ecf52add.png",
      tags: [
        "깃헙 1위",
        "채용공고 4위",
      ],
      tags_color: ["#F7DF1E", "#000", "#67707D"],
      contents: [
        {
          highlight: "자바스크립트",
          content: "는 웹사이트, 모바일 앱, 브라우저 게임 등에 사용됩니다.",
        },
        {
          highlight: "장점",
          content: "난이도 중하, 많은 수요, 타언어 궁합 좋음, 플랫폼 의존성 X",
        },
        {
          highlight: "단점",
          content: "브라우저 호환성 문제, 소스 노출의 위험",
        },
        {
          highlight: "Google, Wikipedia, Youtube, Facebook, Amazon",
          content: "웹사이트의 프론트엔드 개발에 사용되었습니다. ",
        },
      ],
      like: 60,
      dislike: 3,
    }, {
      title: "React",
      sub_title: "가장 큰 시장점유율을 가진 웹 프레임워크",
      logo: "https://user-images.githubusercontent.com/37580034/98779920-b5fd2700-2437-11eb-9bc4-452729ecc0c5.png",
      tags: [
        "깃헙 1위",
        "채용공고 1위",
      ],
      tags_color: ["#61DAFB", "#67707D", "#67707D"],
      contents: [
        {
          highlight: "장점",
          content: "SPA - 새로고침이 없어 UX 향상에 도움\n컴포넌트 기반 - UI 유지보수가 쉽고 재사용이 용이\n확장프로그램(크롬) - 공식 디버깅 개발자도구 지원",
        },
        {
          highlight: "단점",
          content: "SPA - SEO(검색엔진 최적화) 문제 존재\nSPA - 초기 구동 속도가 상대적으로 느림\nJSX 문법 - 비기너에게 복잡하게 느껴질 수 있음",
        },
        {
          highlight: "Facebook, Instagram, Netflix, Slack",
          content: "이 리액트로 개발되었습니다.",
        },
      ],
      like: 100,
      dislike: 1,
    },
  ]

  return (
    <>
    <Header>
        <h1>프로그래밍 언어 인기 TOP3</h1>
        <p>가장 인기있는 프로그래밍 언어를 예발자닷컴에서 확인해보세요</p>
    </Header>
      <section className={styles.cardList_wrapper}>
          <CardList cardList={cardList}/>
      </section>
    </>
  );
}