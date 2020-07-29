import React from 'react';
import styles from './YearlyCalendar.module.css'
import classNames from 'classnames';
import Header from "./Header";
import CTA from "./CTA";

function YearByWeekLines() {
    
	return (
		 <>
			 <div className={classNames({[styles.gantt__row]: true, [styles.gantt__row__months]: true})}>
				 <div className={styles.gantt__row__first}></div>
				 {Array(12).fill('').map((v, idx) => <span>{idx+1}월</span>)}
			 </div>
			 <div className={classNames({[styles.gantt__row]: true, [styles.gantt__row__lines]: true})}>
				 {Array(54).fill('').map((v, idx) => <span></span>)}
			 </div>
		 </>
	 )
 }

function ProgramList() {
    const ProgramData = [
        {
            program: "42 Seoul",
            step: [
                {
                    title:  "지원",
                    date: "상시모집",
					gridColumn: "1/366",
					backgroundColor: "#4DF0FF",
					zIndex: "3",
					oversize_list: 1,
					next_year: 0,
                },
                {
                    title: "라피신",
                    date: "1/23 ~ 2/16",
					gridColumn: "24/46",
					backgroundColor: "#42A7F1",
					zIndex: "2",
					oversize_list: 0,
					next_year: 0,
                },
                {
                    title: "교육",
                    date: "2/27 ~ 최대 2년",
					gridColumn: "57/380",
					backgroundColor: "#CBDFFD",
					zIndex: "1",
					oversize_list: 1,
					next_year: 1,
                }
            ],
        },{
            program: "2기",
            step: [
                {
                    title:  "라피신",
                    date: "2-1기 : 6/29 ~ 7/24",
					gridColumn: "179/204",
					backgroundColor: "#42A7F1",
					zIndex: "3",
					oversize_list: 0,
					next_year: 0,
                },
                {
                    title: "라피신",
                    date: "2-2기 : 7/27 ~ 8/24",
					gridColumn: "207/234",
					backgroundColor: "#42A7F1",
					zIndex: "2",
					oversize_list: 0,
					next_year: 0,
                },
                {
                    title: "교육",
                    date: "9/01 ~ 최대 2년",
					gridColumn: "244/380",
					backgroundColor: "#CBDFFD",
					zIndex: "1",
					oversize_list: 1,
					next_year: 1,
                }
            ],
        },{
            program: "3기",
            step: [
                {
                    title:  "라피신",
                    date: "3-1기 : 8/31 ~ 9/27",
					gridColumn: "241/267",
					backgroundColor: "#42A7F1",
					zIndex: "3",
					oversize_list: 0,
					next_year: 0,
                },
                {
                    title: "라피신",
                    date: "3-2기 : 10/05 ~ 11/01",
					gridColumn: "275/301",
					backgroundColor: "#42A7F1",
					zIndex: "2",
					oversize_list: 0,
					next_year: 0,
                },
                {
                    title: "교육",
                    date: "11/15 ~ 최대 2년",
					gridColumn: "315/380",
					backgroundColor: "#CBDFFD",
					zIndex: "1",
					oversize_list: 1,
					next_year: 1,
                }
            ],
        },{
            program: "SSAFY",
            step: [
                {
                    title:  "지원",
                    date: "5/11 ~ 5/25",
					gridColumn: "129/149",
					backgroundColor: "#4DF0FF",
					zIndex: "3",
					oversize_list: 0,
					next_year: 0,
                },
                {
                    title: "선발",
                    date: "SW적성진단 : 6/06 <br/> 현장 인터뷰 : 6/17 ~ 6/19",
					gridColumn: "155/175",
					backgroundColor: "#54c6f9",
					zIndex: "2",
					oversize_list: 0,
					next_year: 0,
                },
                {
                    title: "교육",
                    date: "7/07 ~ 1년",
					gridColumn: "187/380",
					backgroundColor: "#CBDFFD",
					zIndex: "1",
					oversize_list: 1,
					next_year: 1,
                }
            ],
        },{
            program: "네이버 부스트캠프",
            step: [
                {
                    title:  "지원",
                    date: "6/01 ~ 6/30",
					gridColumn: "151/180",
					backgroundColor: "#4DF0FF",
					zIndex: "4",
					oversize_list: 0,
					next_year: 0,
                },
                {
                    title: "선발",
                    date: "1차 코딩테스트 : 7/04 <br/> 2차 코딩테스트 : 7/20",
					gridColumn: "186/207",
					backgroundColor: "#54c6f9",
					zIndex: "3",
					oversize_list: 0,
					next_year: 0,
                },
                {
                    title: "챌린지",
                    date: "7/27 ~ 8/21",
					gridColumn: "207/237",
					backgroundColor: "#42A7F1",
					zIndex: "2",
					oversize_list: 0,
					next_year: 0,
                },
                {
                    title: "교육",
                    date: "8/31 ~ 12/21",
					gridColumn: "237/351",
					backgroundColor: "#CBDFFD",
					zIndex: "1",
					oversize_list: 1,
					next_year: 0,
                }
            ],
        },{
            program: "SW 마에스트로",
            step: [
                {
                    title:  "지원",
                    date: "1/22 ~ 2/21",
					gridColumn: "22/51",
					backgroundColor: "#4DF0FF",
					zIndex: "3",
					oversize_list: 0,
					next_year: 0,
                },
                {
                    title: "선발",
                    date: "1차 코딩테스트 : 3/14 <br/>2차 코딩테스트 : 4/26 <br/>심층면접 : 5/08~09",
					gridColumn: "74/129",
					backgroundColor: "#54c6f9",
					zIndex: "2",
					oversize_list: 0,
					next_year: 0,
                },
                {
                    title: "교육",
                    date: "6/01 ~ 12월",
					gridColumn: "153/365",
					backgroundColor: "#CBDFFD",
					zIndex: "1",
					oversize_list: 1,
					next_year: 0,
                }
            ],
        },{
            program: "우아한테크코스",
            step: [
                {
                    title:  "미정 (2021년 시작예정)",
                    date: "약 10개월",
					gridColumn: "1/366",
					backgroundColor: "#DAE4F2",
					zIndex: "1",
					oversize_list: 1,
					next_year: 0,
                },
            ],
        },{
            program: "멋쟁이사자처럼",
            step: [
                {
                    title:  "지원",
                    date: "3/17 ~ 대학별 상이",
					gridColumn: "77/107",
					backgroundColor: "#4DF0FF",
					zIndex: "2",
					oversize_list: 0,
					next_year: 0,
                },
                {
                    title: "교육",
                    date: "4월 ~ 10월",
					gridColumn: "107/270",
					backgroundColor: "#CBDFFD",
					zIndex: "1",
					oversize_list: 0,
					next_year: 1,
                },
            ],
        },
    ]
    return (
        <>
            {ProgramData.map((v) => <StepList data={v}/>)}
        </>
    )
}

function StepList({data}) {
    return (
        <>
            <div className={styles.gantt__row}>
                <div className={styles.gantt__row__first}>
                    <span>{data.program}</span>

                </div>
                <ul className={styles.gantt__row__bars}>
                    {data.step.map((v) => <StepListItem data={v}/>)}
                </ul>
            </div>
        </>
    )
}

function StepListItem({data}) {
    return (
        <>
            <li className={classNames({[styles.calendar_entry]: true, [styles.oversize_list]: true})} 
            style={{ gridColumn: data.gridColumn, backgroundColor: data.backgroundColor, zIndex: data.zIndex}}>
                <span className={styles.calendar_entry__date}>{data.date}</span>
                <span className={styles.calendar_entry__title}>{data.title}</span>
            </li>
        </>
    )
}

export default function YearlyCalendar() {

	return (
	  <>
      <Header className={styles.webheader}>
        <h1>2020년 부트캠프</h1>
        <p className={styles.websubtitle}>무료 부트캠프 일정을 한 눈에 확인하세요</p>
      </Header>
      <div className={classNames({[styles.wrapper]: true, [styles.landscape_only]: true})}>
        <CTA />
          <div className={styles.gantt}>
              <YearByWeekLines />
              <ProgramList />
          </div>
      </div>
  </>
	);
}