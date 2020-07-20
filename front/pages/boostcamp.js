import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import FAQ from "../components/FAQ"
import Review from "../components/Review";
import Timeline from '../components/HorizontalTimeline';
import styles from "../components/HorizontalTimeline.module.css";


const Boostcamp = () => {

  {/*
  const list = [
  {
    id: 'a',
    title: '접수기간',
    status: '마감',
    date: '6.1 11:00 ~ 6.30 23:59',
  },
];
*/}

    return (
        <Layout>
            {/*<Header>*/}
            {/*    <h2>네이버 부스트캠프</h2>*/}
            {/*    <p>개발자의 지속 가능한 성장을 추구하는 학습 커뮤니티</p>*/}
            {/*</Header>*/}

            {/*<Timeline props.title="접수기간" props.status="마감" props.date="6.1 11:00 ~ 6.30 23:59</div>">*/}
            {/*  /!*<div className={classNames({[styles.card]: true, [styles.card_end]: true})}>*!/*/}
            {/*  /!*  1차<span className={styles.status_end}>모집중</span><div className={styles.content}>온라인 코딩테스트<br/>7.4</div>*!/*/}
            {/*  /!*</div>*!/*/}

            {/*</Timeline>*/}
            {/*<ul>*/}
            {/*  {list.map(item) => (*/}
            {/*    <li key={item.id}>*/}
            {/*      <div className={classNames({[styles.card]: true, [styles.card_end]: true})}>{item.title}</div>*/}
            {/*      <span className={styles.status_end}>{item.statud}</span>*/}
            {/*      <div className={styles.content}>{item.date}</div>*/}
            {/*    </li>*/}
            {/*    )}*/}
            {/*</ul>*/}

            <Timeline/>

            <Header>
                <h3>자주 묻는 질문</h3>
                <p>항목별로 더 자세한 내용을 알아보세요</p>
            </Header>
            <FAQ />
            <Header>
                <h3>부트캠프 참여후기</h3>
                <p>솔직담백한 이야기를 공유합니다</p>
            </Header>
            <Review></Review>
        </Layout>
    );
}

export default Boostcamp;