import styles from "./Timeline.module.css";
import TimelineList from './TimelineList';
import classNames from 'classnames';

export default function TimelineListItem({data, id}) {
  {/* edu인지 recruit인지 구분 */}
  let type;
  if (data.edu == `true`) {
    type = 'edu';
  } else {
    type = 'recruit';
  }
  let card_type = `card_${type}`;
  let status = `status_${type}`;


  let updown;
  {/* 카드가 위/아래 중 어디에 위치할지 && edu/recruit구분 */}
  if (id % 2 == 0) {
    updown = `up_${type}`;
  } else {
    updown = `down_${type}`;
  }

  {/* 시작날까지 남은 날짜 && 마감날까지 남은날짜 계산 */}
  let startdateLeft = Math.floor((new Date(data.startdate).setHours(9) - new Date().setHours(9)) / (1000 * 60 * 60 * 24)) + 1;
  let enddateLeft = Math.floor((new Date(data.enddate).setHours(9) - new Date().setHours(9)) / (1000 * 60 * 60 * 24)) + 1;
  {/* 모집현황으로 D-Day/진행중/마감을 담음 */}
  let status_content;

  if (startdateLeft > 0) {
    status_content = `D-${startdateLeft}`;
  } else if (startdateLeft == 0) {
    status_content = 'D-Day';
  } else if (enddateLeft >= 0) {
    status_content = '진행중';   {/* 카드 및 모집현황의 클래스네임이 모집(recruit)인지 교육(edu)인지 알려주기 */}
  } else {
    status_content = '마감';    {/* 시작날짜 기준으로 DDAY 산정 && 마감날짜 기준으로 진행중/마감 알려주기 */}
    card_type = 'card_end';
    status = 'status_end';
    if (updown == 'up_recruit' || updown == 'up_edu') {
      updown = 'up_end';
    } else {
      updown = 'down_end';
    }
  }

  {/* 시작일과 마감일로 period 표현하기 */}
  let startdate = `${new Date(data.startdate).getMonth() + 1}.${new Date(data.startdate).getDate()}`;
  let enddate = `${new Date(data.enddate).getMonth() + 1}.${new Date(data.enddate).getDate()}`;
  let period;
  if (startdate == enddate) {
    period = startdate;
  } else {
    period = `${startdate} ~ ${enddate}`;
  }


  return (
    <li className={styles.list}>
      <div className={classNames({[styles[card_type]]: true, [styles.card]: true, [styles[updown]]: true})}>
        {data.name}
        <span className={styles[status]}>
          {status_content}
        </span>
        <div className={styles.content}>
          {data.description} <br/>
          {period}
        </div>
      </div>
    </li>
)
}