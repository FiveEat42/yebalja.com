import React , {useEffect} from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { getYearlyCalendarData } from '../redux/actions/yearlyCalendarAction';
import styles from './YearlyCalendar.module.css'
import classNames from 'classnames';
import Header from "./Header";
import CTA from "./CTA";
import Link from 'next/link'

function CalendarGrid() {
  const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let todayDate = new Date();
  let CurrentMonth = todayDate.getMonth() + 2;

  return (
    <>
      <div className={classNames({ [styles.gantt__row]: true, [styles.gantt__row__months]: true })}>
        <div className={styles.gantt__row__first}></div>
        {month.map((v, idx) => <span key={idx}>{v}월</span>)}
      </div>
      <div className={classNames({ [styles.gantt__row]: true, [styles.gantt__row__lines]: true })}>
        {month.map((v, idx) => (v === CurrentMonth) ? <span className={styles.current_marker} key={idx}></span> : <span key={idx}></span>)} {/* 12칸으로 나누고, 현재 월이면 배경색 칠함. */}
      </div>
    </>
  )
}

function ProgramList() {
  const yearlyCalendarData = useSelector((state) => state.yearlyCalendarReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    getYearlyCalendarData().then(function(result){
      dispatch(result);
    });
  },[]);
  const programData = yearlyCalendarData ?? [];

  return (
    <>
      {programData?.map((v, idx) => <GisuList data={v} key={idx} />)}
    </>
  )
}

function GisuList({ data }) {
  return (
    <>
      {data.gisuData.map((v, idx) => <StepList data={v} key={idx} title={data.title} link={data.idName}/>)}
    </>
  )
}

function StepList({ data, title, link }) { {/* Calendar의 Row */}
  let title_and_gisu = <span><Link href={link}><a>{title}</a></Link><br/><br/><span className={styles.gisu}>{data.gisu}</span></span>;
  let title_only =<span><Link href={link}><a>{title}</a></Link></span>;
  let gisu_only = <span className={styles.gisu}>{data.gisu}</span>;

  return (
    <>
      <div className={styles.gantt__row}>
        <div className={styles.gantt__row__first}> {/* 각 Row의 첫 번째 Column */}
          {
            (() => {
              if (data.visible === 1 && title === "42SEOUL ") return (title_and_gisu);
              else if (data.visible === 1) return (title_only);
              else if (data.visible > 1) return (gisu_only);
            })()
          }
        </div>
        <ul className={styles.gantt__row__bars}>
          {data.step.map((v, idx, id) => <StepListItem data={v} key={idx} id={data.step.length - 1 - idx} />)}
        </ul>
      </div>
    </>
  )
}

function StepListItem({ data, id}) { {/* 각 Row의 일정 아이템들 */}
  let startDate = new Date(data.startDate).setHours(9);
  let endDate = new Date(data.endDate).setHours(9);
  let beginning = new Date('2020-01-01').setHours(9);
  let start = Math.floor((startDate - beginning) / (1000 * 60 * 60 * 24)) + 1;
  let end = Math.floor((endDate - beginning) / (1000 * 60 * 60 * 24)) + 1;
  let gridColumn = start.toString() + "/" + end.toString();

  let backgroundColor = "#42A7F1"
  switch (data.title) {
    case "지원":
      backgroundColor = "#4DF0FF";
      break;
    case "선발":
      backgroundColor = "#54c6f9";
      break;
    case "교육":
      backgroundColor = "#CBDFFD";
      break;
    case "미정":
      backgroundColor = "#DAE4F2";
      break;
  }

  let zIndex = id;
  let oversize_list = (end - start > 61) ? 1 : 0; {/* 두 달이 넘어가는 일정은 hover 시 자기 자신의 크기를 가짐 */}
  let next_year = (new Date(data.endDate).getFullYear() > new Date().getFullYear()) ? 1 : 0; {/* 내년으로 이어지는 일정은 오른쪽 border-radius를 0으로 함 */}

  return (
    <>
      {
        (() => {
          if (oversize_list === 0 && next_year === 0)
            return (
              <li className={classNames({ [styles.calendar_entry]: true })} style={{ gridColumn: gridColumn, backgroundColor: backgroundColor, zIndex: zIndex }}>
                <span className={styles.calendar_entry__title}>{data.title}</span>
                <span className={styles.calendar_entry__date} dangerouslySetInnerHTML={{ __html: data.period }}></span>
              </li>
            );
          else if (oversize_list === 1 && next_year === 0)
            return (
              <li className={classNames({ [styles.calendar_entry]: true, [styles.oversize_list]: true })} style={{ gridColumn: gridColumn, backgroundColor: backgroundColor, zIndex: zIndex }}>
                <span className={styles.calendar_entry__title}>{data.title}</span>
                <span className={styles.calendar_entry__date} dangerouslySetInnerHTML={{ __html: data.period }}></span>
              </li>
            );
          else if (oversize_list === 1 || next_year === 1)
            return (
              <li className={classNames({ [styles.calendar_entry]: true, [styles.oversize_list]: true, [styles.next_year]: true })} style={{ gridColumn: gridColumn, backgroundColor: backgroundColor, zIndex: zIndex }}>
                <span className={styles.calendar_entry__title}>{data.title}</span>
                <span className={styles.calendar_entry__date} dangerouslySetInnerHTML={{ __html: data.period }}></span>
              </li>
            );
        })()
      }
    </>
  )
}

export default function YearlyCalendar() {

  return (
    <>
      <Header>
        <h1 className={styles.webheader}>2020년 부트캠프</h1>
        <p className={styles.websubtitle}>무료 부트캠프 일정을 한 눈에 확인하세요</p>
      </Header>
      <div className={classNames({ [styles.wrapper]: true, [styles.landscape_only]: true })}>
        <CTA />
        <div className={styles.gantt}>
          <CalendarGrid />
          <ProgramList />
        </div>
      </div>
    </>
  );
}