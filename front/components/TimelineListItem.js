import styles from "./Timeline.module.css";
import TimelineList from './TimelineList';
import classNames from 'classnames';

export default function TimelineListItem({data}) {

	const currentdate = new Date();												{/* new Date()함수는 현재 날짜를 생성 */}
	const targetdate = new Date(data.startdate);			{/* new Date(`MM/DD/YY`)는 입력한 날짜를 생성 */}
  let difference =  Math.floor((targetdate - currentdate)/(1000 * 60 * 60 * 24)) + 1;		{/* getTime()함수는 날짜를 총 시간으로 표기 */}
  let timeLeft;  																				{/* 남은 날짜를 담을 변수 */}
	let card_status = 'card_'+data.type;
	let status = 'status_'+data.type;
	let dot = 'dot_'+data.type;
	let updown;

	if (data.id % 2 == 1) {
		updown = 'up';
	} else {
		updown = 'down';
	}

  if (difference >= 0) {
    timeLeft = `D-${difference}`;			{/* 시간의 차를 반내림하면 며칠 차이 나는지 구할 수 있다 */}
  } else {
    timeLeft = '마감'; 						{/* 지난 날은 무조건 -1로 표시하기로 정함 */}
    card_status = 'card_end';
  	status = 'status_end';
  	dot = 'dot_end';
  }



		return (
				<div className={styles.box}>
					<div className={styles[dot]}></div>
					<div className={classNames({[styles.card]: true, [styles[card_status]]: true, [styles[updown]]: true})}>
						{data.name}
						<span className={styles[status]}>
							{timeLeft}
						</span>
						<div className={styles.content}>
							{data.description} <br/>
							{data.date}
						</div>
					</div>
				</div>
		)
	}