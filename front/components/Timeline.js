import React from 'react';
import styles from './Timeline.module.css';
import Header from "./Header";
import Layout from "./Layout";
import classNames from 'classnames';
import CalculateDays from './CalculateDays';
import TimelineList	from './TimelineList';
import TimelineListItem from "./TimelineListItem";


const Timeline = () => {

	return (

		<div className={styles.body}>
		<Header className={styles.header}>
				<h1>네이버 부스트캠프</h1>
				<p>개발자의 지속 가능한 성장을 추구하는 학습 커뮤니티</p>
			</Header>
			<div className={styles.line}></div>
			<div className={styles.timeline}>
		<TimelineList />
		{/*
					<ol className={styles.order}>

					<li className={styles.list}>
						<div className={classNames({[styles.card]: true, [styles.card_end]: true})}>
							1차<span className={styles.status_end}>마감</span><div className={styles.content}>온라인 코딩테스트<br/>감</div>
						</div>
					</li>
					<li className={styles.list}>
						<div className={classNames({[styles.card]: true, [styles.card_now]: true})}>
							2차<span className={styles.status}>모집중</span><div className={styles.content}>온라인 코딩테스트<br/>7.4</div>
						</div>
					</li>
					<li className={styles.list}>
						<div className={classNames({[styles.card]: true, [styles.card_now]: true})}>
							최종 합격자 발표<span className={styles.status}>모집중</span><div className={styles.content}>수료자 선발<br/>7.20</div>
						</div>
					</li>
					<li className={styles.list}>
						<div className={classNames({[styles.card]: true, [styles.card_edu]: true})}>
							부스트캠프 챌린지<span className={styles.status_edu}>D-43</span><div className={styles.content}>수료자 선발<br/>7.27 ~ 8.21</div>
						</div>
					</li>
					<li className={styles.list}>
						<div className={classNames({[styles.card]: true, [styles.card_edu]: true})}>
							부스트캠프 멤버쉽<span className={styles.status_edu}>D-55</span><div className={styles.content}>챌린지 과정 수료자만<br/>8.31 ~ 12.21</div>
						</div>
					</li>
					<li>
					</li>
				</ol>
*/}
	</div>
	</div>

	);
}

export default Timeline;