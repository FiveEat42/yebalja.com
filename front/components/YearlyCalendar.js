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
                    <li style={{ gridColumn: `0/11`, backgroundColor: `#2ecaac` }}>2기 모집</li>
                    <li style={{ gridColumn: `11/12`, backgroundColor: `#ff6252` }}>코딩테스트</li>
                    <li style={{ gridColumn: `126/160`, backgroundColor: `#54c6f9` }}>프리코스</li>
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
                        <span></span><span className="marker"></span><span></span>
                        <span></span><span></span><span></span>
                </div>
                <div className={styles.gantt__row}>
                    <div className={styles.gantt__row__first}>
                        SW 마에스트로
                    </div>
                    <ul className={styles.gantt__row__bars}>
                        <li style={{ gridColumn: `1/2`, backgroundColor: `#2ecaac` }}>11기 모집</li>
                        <li style={{ gridColumn: `2/3`, backgroundColor: `#ff6252` }}>코딩테스트/면접</li>
                    </ul>
                    <ul className={styles.gantt__row__bars}></ul>
                </div>
                <div className={styles.gantt__row}>
                    <div className={styles.gantt__row__first}>
                        42 Seoul
                    </div>
                    <ul className={styles.gantt__row__bars}>
                        <li style={{ gridColumn: `1/13`, backgroundColor: `#2ecaac` }}>1차 온라인테스트 상시모집</li>
                        <li style={{ gridColumn: `1/2`, backgroundColor: `#54c6f9` }}>1-1차 La Piscine</li>
                        <li style={{ gridColumn: `5/6`, backgroundColor: `#54c6f9` }}>1-2차 La Piscine</li>
                        <li style={{ gridColumn: `7/8`, backgroundColor: `#54c6f9` }}>2-1차 La Piscine</li>
                    </ul>
                </div>
                <div className={styles.gantt__row}>
                    <div className={styles.gantt__row__first}>
                        SSAFY
                    </div>
                    <ul className={styles.gantt__row__bars}>
                        <li style={{ gridColumn: `5/6`, backgroundColor: `#2ecaac` }}>4기 모집</li>
                        <li style={{ gridColumn: `6/7`, backgroundColor: `#ff6252` }}>CBT</li>
                    </ul>
                </div>
                <div className={styles.gantt__row}>
                    <div className={styles.gantt__row__first}>
                        우아한테크코스
                    </div>
                    <ul className={styles.gantt__row__bars}>
                        <li style={{ gridColumn: `10/11`, backgroundColor: `#2ecaac` }}>2기 모집</li>
                        <li style={{ gridColumn: `11/12`, backgroundColor: `#ff6252` }}>코딩테스트</li>
                        <li style={{ gridColumn: `12/13`, backgroundColor: `#54c6f9` }}>프리코스</li>
                    </ul>
                </div>
                <div className={styles.gantt__row}>
                    <div className={styles.gantt__row__first}>
                        네이버 부스트캠프
                    </div>
                    <ul className={styles.gantt__row__bars}>
                        <li style={{ gridColumn: `6/7`, backgroundColor: `#2ecaac` }}>모집</li>
                        <li style={{ gridColumn: `7/8`, backgroundColor: `#ff6252` }}>코딩테스트</li>
                        <li style={{ gridColumn: `8/9`, backgroundColor: `#54c6f9` }}>부스트캠프 챌린지</li>
                    </ul>
                </div>
            </div>
        </div>
	);
  }