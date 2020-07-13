import React from 'react';
import styles from './YearlyCalendar.module.css'
import classNames from 'classnames';
import Header from "./Header";
export default function YearlyCalendar() {

	return (
	  <>
      <Header>
        <h2>2020년 부트캠프</h2>
        <p className={styles.websubtitle}>무료 부트캠프 일정을 한 눈에 확인하세요</p>
        <p className={styles.mobilesubtitle}>무료 부트캠프 연간 일정은 웹사이트 혹은 가로모드에서 지원됩니다</p>
      </Header>
      <div className={classNames({[styles.wrapper]: true, [styles.landscape_only]: true})}>
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
                      <span></span><span></span><span></span>
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
                      <li className={classNames({[styles.calendar_entry]: true, [styles.button ]: true})} style={{ gridColumn: `4/8`, backgroundColor: `#4DF0FF`, zIndex: `1` }}>
                          <span className={styles.calendar_entry__date}>1/22 - 3/10</span>
                          <span className={styles.calendar_entry__title}>지원</span>
                          <span className={styles.calendar_entry__details}><a>자세히보기</a></span>

                          {/* <span className={styles.calendar_entry__category}>Meeting</span> */}
                      </li>
                      <li className={styles.calendar_entry} style={{ gridColumn: `10/14`, backgroundColor: `#54c6f9` }}>
                          <span className={styles.calendar_entry__date}>1/22 - 3/10</span>
                          <span className={styles.calendar_entry__title}>선발</span>
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
                      <li style={{ gridColumn: `1/53`, backgroundColor: `#4DF0FF` }}>지원</li>
                      <li className={styles.calendar_entry} style={{ gridColumn: `3/7`, backgroundColor: `#5C4DFF` }}>
                          <span className={styles.calendar_entry__date}>1/23 - 2/16</span>
                          <span className={styles.calendar_entry__title}>Piscine</span>
                          <span className={styles.calendar_entry__details}><a>자세히보기</a></span>
                      </li>
                      <li className={styles.calendar_entry} style={{ gridColumn: `20/24`, backgroundColor: `#5C4DFF`, zIndex: `1` }}>
                          <span className={styles.calendar_entry__date}>5/29 - 6/25</span>
                          <span className={styles.calendar_entry__title}>Piscine</span>
                          <span className={styles.calendar_entry__details}><a>자세히보기</a></span>
                      </li>
                      <li className={styles.calendar_entry} style={{ gridColumn: `28/32`, backgroundColor: `#5C4DFF` }}>
                          <span className={styles.calendar_entry__date}>7/1 - 7/30</span>
                          <span className={styles.calendar_entry__title}>Piscine</span>
                          <span className={styles.calendar_entry__details}><a>자세히보기</a></span>
                      </li>
                  </ul>
              </div>
              <div className={styles.gantt__row}>
                  <div className={styles.gantt__row__first}>
                      SSAFY
                  </div>
                  <ul className={styles.gantt__row__bars}>
                      <li className={styles.calendar_entry} style={{ gridColumn: `19/22`, backgroundColor: `#4DF0FF`, zIndex: `1` }}>
                          <span className={styles.calendar_entry__date}>5/11 - 5/25</span>
                          <span className={styles.calendar_entry__title}>지원</span>
                          <span className={styles.calendar_entry__details}><a>4기</a></span>
                      </li>
                      <li className={styles.calendar_entry} style={{ gridColumn: `23/26`, backgroundColor: `#54c6f9` }}>
                          <span className={styles.calendar_entry__date}>7/1 - 7/30</span>
                          <span className={styles.calendar_entry__title}>선발</span>
                          <span className={styles.calendar_entry__details}><a>자세히보기</a></span>
                      </li>
                  </ul>
              </div>
              <div className={styles.gantt__row}>
                  <div className={styles.gantt__row__first}>
                      우아한테크코스
                  </div>
                  <ul className={styles.gantt__row__bars}>
                      <li className={classNames({[styles.calendar_entry]: true, [styles.oversise_list]: true})} style={{ gridColumn: `44/47`, backgroundColor: `#4DF0FF`, zIndex: `1` }}>
                          <span className={styles.calendar_entry__date}>5/11 - 5/25</span>
                          <span className={styles.calendar_entry__title}>지원</span>
                          <span className={styles.calendar_entry__details}><a>4기</a></span>
                      </li>
                      <li className={classNames({[styles.calendar_entry]: true, [styles.oversise_list]: true})} style={{ gridColumn: `47/52`, backgroundColor: `#54c6f9` }}>
                          <span className={styles.calendar_entry__date}>7/1 - 7/30</span>
                          <span className={styles.calendar_entry__title}>선발</span>
                          <span className={styles.calendar_entry__details}><a>자세히보기</a></span>
                      </li>
                  </ul>
              </div>
              <div className={styles.gantt__row}>
                  <div className={styles.gantt__row__first}>
                      네이버 부스트캠프
                  </div>
                  <ul className={styles.gantt__row__bars}>
                      <li className={styles.calendar_entry} style={{ gridColumn: `23/27`, backgroundColor: `#4DF0FF`, zIndex: `3` }}>
                          <span className={styles.calendar_entry__date}>5/11 - 5/25</span>
                          <span className={styles.calendar_entry__title}>지원</span>
                          <span className={styles.calendar_entry__details}><a>4기</a></span>
                      </li>
                      <li className={styles.calendar_entry} style={{ gridColumn: `27/31`, backgroundColor: `#54c6f9`, zIndex: `2` }}>
                          <span className={styles.calendar_entry__date}>7/1 - 7/30</span>
                          <span className={styles.calendar_entry__title}>선발</span>
                          <span className={styles.calendar_entry__details}><a>자세히보기</a></span>
                      </li>
                      <li className={styles.calendar_entry} style={{ gridColumn: `32/36`, backgroundColor: `#5C4DFF`, zIndex: `1` }}>
                          <span className={styles.calendar_entry__date}>8/5 - 8/30</span>
                          <span className={styles.calendar_entry__title}>챌린지</span>
                          <span className={styles.calendar_entry__details}><a>자세히보기</a></span>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </>
	);
  }