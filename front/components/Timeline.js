import styles from './Timeline.module.css';
import Header from "./Header";
import classNames from 'classnames';
import TimelineList	from './TimelineList';


const Timeline = ({program}) => {

	const programHeader = {
		ftseoul: [
			{
				heading: '42서울',
				subheading: '이노베이션 아카데미의 소프트웨어 개발자 양성프로그램입니다.',
			},
		],
		boostcamp: [
			{
				heading: '네이버 부스트캠프',
				subheading: '개발자의 지속 가능한 성장을 추구하는 학습 커뮤니티',
			},
		],
	}

	let h1 = programHeader[program][0].heading;
	let p = programHeader[program][0].subheading;

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