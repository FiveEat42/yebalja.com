import styles from "./Timeline.module.css";
import TimelineList from './TimelineList';
import classNames from 'classnames';

export default function TimelineListItem({data, id}) {
  {/* edu인지 recruit인지 구분 */}
  let type;
  if (data.edu == 1) {
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

  {/* 시작일, 마감일, 시작시간, 마감시간 구하기 */}
  let startdate = `${new Date(data.startdate).getMonth() + 1}.${new Date(data.startdate).getDate()}`;
  if (new Date(data.startdate).getFullYear() != new Date().getFullYear()) {
    startdate = `${new Date(data.startdate).getFullYear()}.${startdate}`;
  }
  let enddate = `${new Date(data.enddate).getMonth() + 1}.${new Date(data.enddate).getDate()}`;
  let starttime;
  let endtime;
  {/* 00:00 형태로 시작시간과 마감시간 뽑아내기 */}
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


  {/* 시작날까지 남은 날 && 마감날까지 남은 날 && 시작시간까지 남은 시간 && 마감시간까지 남은 시간 */}
  let startdateLeft = Math.floor((new Date(data.startdate).setHours(0, 0, 0) - new Date().setHours(0)) / (1000 * 60 * 60 * 24)) + 1;
  let enddateLeft = Math.floor((new Date(data.enddate).setHours(0, 0, 0) - new Date().setHours(0)) / (1000 * 60 * 60 * 24)) + 1;
  let starttimeLeft;
  let endtimeLeft;
  if (starttime == '0:00') {
    starttimeLeft = Math.floor((new Date(data.startdate).setHours(23,59,59) - new Date()) / (1000)) + 1;
  } else {
    starttimeLeft = Math.floor((new Date(data.startdate) - new Date()) / (1000)) + 1;
  }
  if (endtime == '0:00') {
    endtimeLeft = Math.floor((new Date(data.enddate).setHours(23,59,59) - new Date()) / (1000)) + 1;
  } else {
    endtimeLeft = Math.floor((new Date(data.enddate) - new Date()) / (1000)) + 1;
  }


  {/* 모집현황으로 D-Day/진행중/마감을 담음 */}
  let status_content;
  if (startdateLeft > 0) {
    status_content = `D-${startdateLeft}`;    {/* 시작일까지 얼마나 남았는지 'D-숫자'로 표시 */}
  } else if (starttimeLeft >= 0) {
        status_content = 'D-Day';              {/* 시작일의 시작시간이 지나면 '진행중' */}
  } else if (starttimeLeft < 0 && endtimeLeft > 0) {
        status_content = '진행중';               {/* 시작일인데 아직 시작시간이 안됐으면 'D-Day' */}
  } else if (endtimeLeft <= 0) {              {/* 마감날의 마감시간이 지난 경우는 '마감' */}
      status_content = '마감';
      card_type = 'card_end';
      status = 'status_end';
      if (updown == 'up_recruit' || updown == 'up_edu') {
        updown = 'up_end';
      } else {
        updown = 'down_end';
      }
  }







  {/* 날짜 및 시간을 period에 넣어 알려주는 부분 */}

  if (startdate == enddate) {                               {/* 시작일과 마감일이 같을 때 */}
    if (starttime == '0:00' && endtime == '0:00') {       {/* startdate */}
      enddate = '';
      starttime = '';
      endtime = '';
    } else if (starttime == endtime || endtime == '0:00') {           {/* startdate starttime */}
      enddate = '';
      endtime = '';
      starttime = ` ${starttime}`;
    } else if (starttime == '0:00') {                         {/* startdate ~ endtime */}
      enddate = '';
      starttime = '';
      endtime = ` ~ ${endtime}`;
    } else {                                                  {/* startdate starttime ~ endtime */}
      enddate = '';
      endtime = ` ~ ${endtime}`;
      starttime = ` ${starttime}`;
    }
  } else {                                              {/* 시작일과 마감일이 다를 때 */}
    if (starttime == '0:00' && endtime == '0:00') {     {/* startdate ~ enddate */}
      starttime = '';
      endtime = '';
      enddate = ` ~ ${enddate}`;                        {/*  */}
    } else if (starttime == '0:00') {                 {/* startdate ~ enddate endtime */}
      starttime = '';
      enddate = ` ~ ${enddate}`;
      endtime = ` ${endtime}`;
    } else if (endtime == '0:00') {                   {/* startdate starttime ~ enddate */}
      endtime = '';
      enddate = ` ~ ${enddate}`;
      starttime = ` ${starttime}`;
    } else {                                           {/* startdate starttime ~ enddate endtime */}
      starttime = ` ${starttime}`;
      enddate = ` ~ ${enddate} `;
    }
  }


  {/* 기간에서 마감일까지 며칠 남았는지 알려주는 부분 */}
  let daysLeft = ''
  if (startdate != enddate) {
    if (enddateLeft <= 7 && enddateLeft > 0) {
      daysLeft = ` (${enddateLeft}일 남음)`;
    } else if (enddateLeft == 0) {
      if (endtimeLeft <= 0 && endtime != '0:00') {
        daysLeft = '';
      } else {
        daysLeft = ` (마감일)`;
      }
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
          <b classNames={styles.datestyle}>{startdate}</b>
  {starttime}
  <b classNames={styles.datestyle}>{enddate}</b>
  {endtime}{daysLeft}
        </div>
      </div>
    </li>
  )
}