import styles from './Timeline.module.css';
import Header from "./Header";
import classNames from 'classnames';
import TimelineList	from './TimelineList';


const Timeline = ({program}) => {

	return (

		<div className={styles.body}>
		<Header className={styles.header}>
			<h1>네이버 부스트캠프</h1>
			<p>개발자의 지속 가능한 성장을 추구하는 학습 커뮤니티</p>
		</Header>
		<div className={styles.line}></div>
		<div className={styles.timeline}>
		<ol>
			<TimelineList program={program}/>
		</ol>
		</div>
	</div>

	);
}

export default Timeline;