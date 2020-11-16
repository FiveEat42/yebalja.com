import styles from './Timeline.module.css';
import Header from "../Header";
import classNames from 'classnames';
import TimelineList	from './TimelineList';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTimelineData } from "../../redux/actions/timelineAction";


const Timeline = () => {
	const dispatch = useDispatch();
  const program = useSelector((state) => state.programReducer.data);
  const programHeader = useSelector((state) => state.timelineReducer.data);
	useEffect(() => {
		getTimelineData().then(function(result){
			dispatch(result)
		});
	}, []);

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