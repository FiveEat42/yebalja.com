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

  {/*
  yebalja.com에서 불러오는 UTC시간에서 9시간을 빼주 KST로 바꿔줍니다.
  타임존 변경이 아닌 강제 시간 변경입니다.
  **예시**
  1. dataGrip에서 6월 6일 11시 입력
  2. api.yebalja.com/api/json/timelinelist에서 2020-06-06T11:00:00.000Z로 입력된 것을 확인
    2-1. yebalja.com에서 6월 6일 20시로 출력
    2-2. 11:00:00 UTC로 인식
    2-3. 20:00:00 GMT+9:00라 20시
  3. localhost:5000/api/json/timelinelist에서 2020-06-06T02:00:00.000Z로 입력된 것을 확인
    3-1. localhost:3000에서 6월 6일 11시로 출력
    3-2. 02:00:00 UTC로 인식
    3-3. 11:00:00 GMT+9:00라 11시
  4. 불러온 데이타의 시간에 강제로 -9시간 해서 2시를 11시로 출력하게 만듦
    4-1. yebalja.com에서 6월 6일 11시로 출력
    4-2. localhost:3000에서 6월 6일 2시로 출력

  */}
  console.log('data.startdate',data.startdate);
  let startdate_KST = new Date(new Date(data.startdate).getTime() - 540*60*1000);
  let enddate_KST = new Date(new Date(data.enddate).getTime() - 540*60*1000);

  console.log('startdate_KST',startdate_KST);

  {/* 시작일, 마감일, 시작시간, 마감시간 구하기 */}
  let startdate = `${new Date(startdate_KST).getMonth() + 1}.${new Date(startdate_KST).getDate()}`;
  if (new Date(startdate_KST).getFullYear() != new Date().getFullYear()) {
    startdate = `${new Date(startdate_KST).getFullYear()}.${startdate}`;
  }
  let enddate = `${new Date(enddate_KST).getMonth() + 1}.${new Date(enddate_KST).getDate()}`;
  let starttime;
  let endtime;
  {/* 00:00 형태로 시작시간과 마감시간 뽑아내기 */}
  if (new Date(startdate_KST).getMinutes() < '10') {
    starttime = `${new Date(startdate_KST).getHours()}:0${new Date(startdate_KST).getMinutes()}`;
  } else {
    starttime = `${new Date(startdate_KST).getHours()}:${new Date(startdate_KST).getMinutes()}`;
  }
  if (new Date(enddate_KST).getMinutes() < '10') {
    endtime = `${new Date(enddate_KST).getHours()}:0${new Date(enddate_KST).getMinutes()}`;
  } else {
    endtime = `${new Date(enddate_KST).getHours()}:${new Date(enddate_KST).getMinutes()}`;
  }


  {/* 시작날까지 남은 날 && 마감날까지 남은 날 && 시작시간까지 남은 시간 && 마감시간까지 남은 시간 */}
  let startdateLeft = Math.floor((new Date(startdate_KST).setHours(0, 0, 0) - new Date().setHours(0)) / (1000 * 60 * 60 * 24)) + 1;
  let enddateLeft = Math.floor((new Date(enddate_KST).setHours(0, 0, 0) - new Date().setHours(0)) / (1000 * 60 * 60 * 24)) + 1;
  let starttimeLeft;
  let endtimeLeft;
  if (starttime == '0:00') {
    starttimeLeft = Math.floor((new Date(startdate_KST).setHours(23,59,59) - new Date()) / (1000)) + 1;
  } else {
    starttimeLeft = Math.floor((new Date(startdate_KST) - new Date()) / (1000)) + 1;
  }
  if (endtime == '0:00') {
    endtimeLeft = Math.floor((new Date(enddate_KST).setHours(23,59,59) - new Date()) / (1000)) + 1;
  } else {
    endtimeLeft = Math.floor((new Date(enddate_KST) - new Date()) / (1000)) + 1;
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