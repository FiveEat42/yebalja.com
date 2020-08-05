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
  let startdateLeft = Math.floor((new Date(data.startdate).setHours(0, 0, 0) - new Date().setHours(0)) / (1000 * 60 * 60 * 24)) + 1;
  let enddateLeft = Math.floor((new Date(data.enddate).setHours(0, 0, 0) - new Date().setHours(0)) / (1000 * 60 * 60 * 24)) + 1;
  let starttimeLeft = Math.floor((new Date(data.startdate) - new Date()) / (1000)) + 1;
  let endtimeLeft = Math.floor((new Date(data.enddate) - new Date()) / (1000)) + 1;

  console.log(startdateLeft);
  console.log(starttimeLeft);
  {/* 모집현황으로 D-Day/진행중/마감을 담음 */}
  let status_content;
  if (startdateLeft > 0) {
    status_content = `D-${startdateLeft}`;    {/* 'D-숫자'로 표시 */}
  } else if (startdateLeft >= 0) {
      if (starttimeLeft >= 0) {
        status_content = '진행중';              {/* 시작시간이 지나면 '진행중' */}
      } else if (starttimeLeft < 0) {
        status_content = 'D-Day';               {/* 시작시간이 안됐으면 'D-Day' */}
      }
  } else if (enddateLeft >= 0) {
    status_content = '진행중';
      if (endtimeLeft <= 0)
        status_content = '마감'
  } else {
    status_content = '마감';
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
  startdate = startdate.bold();
  let enddate = `${new Date(data.enddate).getMonth() + 1}.${new Date(data.enddate).getDate()}`;
  enddate = enddate.bold();
  let starttime;
  let endtime;
  if (new Date(data.startdate).getMinutes() < '10') {
    starttime = `${new Date(data.startdate).getHours()}:0${new Date(data.startdate).getMinutes()}`;
  } else {
    starttime = `${new Date(data.startdate).getHours()}:${new Date(data.startdate).getMinutes()}`;
  }
  if (new Date(data.enddate).getMinutes() < '10') {
    endtime = `${new Date(data.enddate).getHours()}:0${new Date(data.enddate).getMinutes()}`;
  } else {
    endtime = `${new Date(data.enddate).getHours()}:${new Date(data.enddate).getMinutes()}`;
  }

  let period;
  if (startdate == enddate) {                           {/* 시작일과 마감일이 같을 때 */}
    if (starttime == '0:00' && endtime == '0:00') {       {/* 시간이 둘 다 명시 안되어있을 때 */}
      period = startdate;
    } else if (starttime == endtime) {                    {/* 시작시간과 마감시간 같고 시간이 명시되어있을 때 */}
      period = `${startdate} ${starttime}`;
    } else if (endtime == '0:00') {                       {/* 시작시간만 있을 때  */}
      period = `${startdate} ${starttime} ~ ${endtime}`;
} else if (starttime == '0:00') {                         {/* 마감시간만 있을  */}
      period = `${startdate} ~${endtime}`
    }
  } else {                                              {/* 시작일과 마감일이 다를 때 */}
    if (starttime == '0:00' && endtime == '0:00') {   {/* 시간이 명시 안되어있을 때 */}
      period = `${startdate} ~ ${enddate}`;
    } else {                                            {/* 시간이 명시되어있을 때*/}
      period = `${startdate} ${starttime} ~ ${enddate} ${endtime}`;
    }
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