import styles from './Timeline.module.css';
import Header from "./Header";
import classNames from 'classnames';
import TimelineList	from './TimelineList';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getTimelineData } from "../redux/actions/timelineAction";


const Timeline = () => {
	const dispatch = useDispatch();
  const program = useSelector((state) => state.programReducer.data);
  const programHeader = useSelector((state) => state.timelineReducer.data);
	useEffect(() => {
		getTimelineData().then(function(result){
			dispatch(result)
		});
	}, []);

	// const programHeader = {
	// 	ftseoul: [
	// 		{
	// 			heading: '42서울',
	// 			subheading: '최고의 소프트웨어 개발자로 성장할 수 있는 곳, 최고의 동료와 함께 성장할 수 있는 곳, 바로 42 SEOUL입니다',
	// 		},
	// 	],
	// 	ssafy: [
	// 		{
	// 			heading: 'SSAFY',
	// 			subheading: '삼성 청년 SW 아카데미, 대한민국 SW의 미래를 이끕니다',
	// 		},
	// 	],
	// 	boostcamp: [
	// 		{
	// 			heading: '네이버 부스트캠프',
	// 			subheading: '개발자의 지속 가능한 성장을 목표로 하는 실무 교육 프로그램',
	// 		},
	// 	],
	// 	soma: [
	// 		{
	// 			heading: '소프트웨어 마에스트로',
	// 			subheading: '창의도전형 SW인재 육성으로 SW산업의 미래를 선도하는 정부지원 사업',
	// 		},
	// 	],
	// 	woowa: [
	// 		{
	// 			heading: '우아한 테크코스',
	// 			subheading: '자기주도 학습, 현장중심 경험, 깊이있는 협업',
	// 		},
	// 	],
	// 	likelion: [
	// 		{
	// 			heading: '멋쟁이 사자처럼',
	// 			subheading: 'hack your life 내 아이디어를 내 손으로 실현한다',
	// 		},
	// 	],
	// }

	let h1 = programHeader[program]?.[0].heading;
	let p = programHeader[program]?.[0].subheading;

	return (
		<div className={styles.body}>
		<Header className={styles.header}>
			<h1>{h1}</h1>
			<p>{p}</p>
		</Header>
		<div className={styles.line}></div>
		<div className={styles.timeline}>
		<ol className={styles.order}>
			<TimelineList program={program}/>
		</ol>
		</div>
	</div>

	);
}

export default Timeline;