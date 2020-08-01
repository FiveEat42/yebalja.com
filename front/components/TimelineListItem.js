import styles from "./Timeline.module.css";
import TimelineList from './TimelineList';
import classNames from 'classnames';

export default function TimelineListItem({data}) {
	let updown;
	let startdateLeft = Math.floor((new Date(data.startdate).setHours(9) - new Date().setHours(9)) / (1000 * 60 * 60 * 24)) + 1;
	let enddateLeft = Math.floor((new Date(data.enddate).setHours(9) - new Date().setHours(9)) / (1000 * 60 * 60 * 24)) + 1;
	let status_content;				{/* 모집현황 멘트 (D-Day, 진행중, 마감) */}
	{/* 카드, 모집현황, 점의 클래스네임이 모집(now)인지 교육(edu)인지 알려주기 */}
	let card_type = 'card_' + data.type;
	let status = 'status_' + data.type;
	let dot = 'dot_' + data.type;

	{/* 카드가 위/아래 중 어디에 위치할지 */}
	if (data.id % 2 == 1) {
		updown = 'up_' + data.type;
	} else {
		updown = 'down_' + data.type;
	}

	{/* 시작날짜 기준으로 DDAY 산정 && 마감날짜 기준으로 진행중/마감 알려주 */}
	if (startdateLeft > 0) {
		status_content = `D-${startdateLeft}`;
	} else if (startdateLeft == 0) {
		status_content = 'D-Day';
	} else if (enddateLeft >= 0) {
		status_content = '진행중';
	} else {
    status_content = '마감';
    card_type = 'card_end';
  	status = 'status_end';
  	dot = 'dot_end';
  }



		return (
				<div className={styles.box}>
					<div className={styles[dot]}></div>
					<div className={classNames({[styles[card_type]]: true, [styles[updown]]: true})}>
						{data.name}
						<span className={styles[status]}>
							{status_content}
						</span>
						<div className={styles.content}>
							{data.description} <br/>
							`{data.startdate} ~ {data.enddate}`
						</div>
					</div>
				</div>
		)
	}