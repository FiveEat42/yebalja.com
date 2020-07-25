import React from 'react';
import styles from './HorizontalTimeline.module.css';
import Header from "./Header";
import Layout from "./Layout";
import classNames from 'classnames';

export function TimeLineList() {

	const dataList = [
			{
				date_title: "접수기간",
				status_end: "마감",
				content: '6.1 11:00 ~ 6.30 23:59',
				status_end_class: 'statue_end'
			},
			{
				date_title: "접수기간",
				status_end: "마감",
				content: '6.1 11:00 ~ 6.30 23:59',
				status_end_class: 'statue_end'
			},{
				date_title: "접수기간",
				status_end: "마감",
				content: '6.1 11:00 ~ 6.30 23:59',
				status_end_class: 'statue'
			},{
				date_title: "접수기간",
				status_end: "마감",
				content: '6.1 11:00 ~ 6.30 23:59',
				status_end_class: 'statue'
			},{
				date_title: "접수기간",
				status_end: "마감",
				content: '6.1 11:00 ~ 6.30 23:59',
				status_end_class: 'statue_edu'
			},{
				date_title: "접수기간",
				status_end: "마감",
				content: '6.1 11:00 ~ 6.30 23:59',
				status_end_class: 'statue_edu'
			},
		]

	return (
		<>
			{dataList.map((v, idx) => <TimeLineListItem data={v} key={idx}/>)}
		</>
	)
}

export function TimeLineListItem ({data}) {
	// date 넘어가면 status_end
	return (
			<li className={styles.list}>
				<div className={classNames({[styles.card]: true, [styles.card_edu]: true})}>
					{data.date_title}
					<span className={styles[data.statue_end_class]}></span>
					<div className={styles.content}>{data.content}</div>
				</div>
			</li>
	)
}

export default function HorizontalTimeline() {

	return (
		<div className={styles.body}>
			<Header className={styles.header}>
				<h1>네이버 부스트캠프</h1>
				<p>개발자의 지속 가능한 성장을 추구하는 학습 커뮤니티</p>
			</Header>
			<div className={styles.line}></div>
			<div className={styles.timeline}>
				<TimeLineList />


				{/*<div className={styles.arrows}>*/}
				{/*	<button className={styles.prev}>*/}
				{/*	<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/arrow_prev.svg" alt="prev timeline arrow" />*/}
				{/*	</button>*/}
				{/*	<button className={styles.next}>*/}
				{/*	<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/arrow_next.svg" alt="next timeline arrow" />*/}
				{/*	</button>*/}
				{/*</div>*/}
			</div>
		</div>
	);
}
