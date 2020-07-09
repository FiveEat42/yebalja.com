import React from 'react';
import styles from './YearlyCalendar.module.css'
import classNames from 'classnames';
export default function YearlyCalendar() {

	return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h2>2020년 부트캠프</h2>
                <p>무료 부트캠프 일정을 한 눈에 확인하세요.</p>
                <ul className={styles.gantt__tags}>
                        <li style={{  backgroundColor: `#2ecaac` }}>모집</li>
                        <li style={{  backgroundColor: `lightpink` }}>온라인 코딩테스트</li>
                        <li style={{  backgroundColor: `#54c6f9` }}>오프라인 코딩테스트</li>
                        <li style={{  backgroundColor: `orange` }}>면접</li>
                </ul>
            </div>
            <div className={styles.gantt}>
                <div className={classNames({[styles.gantt__row]: true, [styles.gantt__row__months]: true})}>
                        <div className={styles.gantt__row__first}></div>
                        <span>1월</span><span>2월</span><span>3월</span>
                        <span>4월</span><span>5월</span><span>6월</span>
                        <span>7월</span><span>8월</span><span>9월</span>
                        <span>10월</span><span>11월</span><span>12월</span>
                </div>
                <div className={classNames({[styles.gantt__row]: true, [styles.gantt__row__lines]: true})}>
                        <span></span><span></span><span></span>
                        <span></span><span></span><span></span>
                        <span></span><span></span><span></span>
                        <span></span><span></span><span></span>
                        <span></span><span></span><span></span>
                        <span></span><span></span><span></span>
                        <span></span><span></span><span></span>
                        <span></span><span></span><span></span>
                        <span></span><span></span><span></span>
                        <span></span><span className={styles.marker}></span><span></span>
                        <span></span><span></span><span></span>
                        <span></span><span></span><span></span>
                        <span></span><span></span><span></span>
                        <span></span><span></span><span></span>
                        <span></span><span></span><span></span>
                        <span></span><span></span><span></span>
                        <span></span><span></span><span></span>
                        <span></span><span></span><span></span>
                </div>
                <div className={styles.gantt__row}>
                    <div className={styles.gantt__row__first}>
                        SW 마에스트로
                    </div>
                    <ul className={styles.gantt__row__bars}>
                        <li className={styles.calendar_entry} style={{ gridColumn: `4/8`, backgroundColor: `#2ecaac`, zIndex: `1` }}>
                            <span className={styles.calendar_entry__date}>1/22 - 3/10</span>
                            <span className={styles.calendar_entry__title}>모집</span>
                            <span className={styles.calendar_entry__details}><a>자세히보기</a></span>
                            
                            {/* <span className={styles.calendar_entry__category}>Meeting</span> */}
                        </li>
                        <li className={styles.calendar_entry} style={{ gridColumn: `10/14`, backgroundColor: `lightpink` }}>
                            <span className={styles.calendar_entry__date}>1/22 - 3/10</span>
                            <span className={styles.calendar_entry__title}>테스트</span>
                            <span className={styles.calendar_entry__details}><a>자세히보기</a></span>
                        </li>
                    </ul>
                    <ul className={styles.gantt__row__bars}></ul>
                </div>
                <div className={styles.gantt__row}>
                    <div className={styles.gantt__row__first}>
                        42 Seoul
                    </div>
                    <ul className={styles.gantt__row__bars}>
                        <li style={{ gridColumn: `1/53`, backgroundColor: `#2ecaac` }}>상시모집</li>
                        <li style={{ gridColumn: `3/7`, backgroundColor: `#54c6f9` }}>1-1차 Piscine</li>
                        <li style={{ gridColumn: `20/24`, backgroundColor: `#54c6f9` }}>1-2차 Piscine</li>
                        <li style={{ gridColumn: `28/32`, backgroundColor: `#54c6f9` }}>2-1차 Piscine</li>
                    </ul>
                </div>
                <div className={styles.gantt__row}>
                    <div className={styles.gantt__row__first}>
                        SSAFY
                    </div>
                    <ul className={styles.gantt__row__bars}>
                        <li style={{ gridColumn: `19/24`, backgroundColor: `#2ecaac` }}>모집</li>
                        <li style={{ gridColumn: `24/25`, backgroundColor: `lightpink` }}></li>
                        <li style={{ gridColumn: `25/26`, backgroundColor:`orange` }}></li>
                    </ul>
                </div>
                <div className={styles.gantt__row}>
                    <div className={styles.gantt__row__first}>
                        우아한테크코스
                    </div>
                    <ul className={styles.gantt__row__bars}>
                        <li style={{ gridColumn: `43/46`, backgroundColor: `#2ecaac` }}>모집</li>
                        <li style={{ gridColumn: `46/47`, backgroundColor: `lightpink` }}></li>
                        <li style={{ gridColumn: `48/52`, backgroundColor: `#54c6f9` }}>프리코스</li>
                    </ul>
                </div>
                <div className={styles.gantt__row}>
                    <div className={styles.gantt__row__first}>
                        네이버 부스트캠프
                    </div>
                    <ul className={styles.gantt__row__bars}>
                        <li style={{ gridColumn: `23/27`, backgroundColor: `#2ecaac` }}>모집</li>
                        <li style={{ gridColumn: `27/28`, backgroundColor: `lightpink` }}>1</li>
                        <li style={{ gridColumn: `28/29`, backgroundColor: `lightpink` }}>2</li>
                        <li style={{ gridColumn: `30/33`, backgroundColor: `#54c6f9` }}>챌린지</li>
                    </ul>
                </div>
            </div>
        </div>
	);
  }