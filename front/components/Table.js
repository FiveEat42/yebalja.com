import styles from './Table.module.css';
import React from "react";
import classNames from 'classnames';
import Link from 'next/link';
import CodingTest from './BadgeCoding';
import Aptitude from './BadgeAptitude';
import Interview from './BadgeInterview';
import Tryout from './BadgeTryout';
import Header from "./Header";

import { useSelector } from 'react-redux';

export default function Table() {
  const user = useSelector((state) => state.user.name);

    return (
      <>
      <div className={styles.wrapper}>
        {/* Badge Description*/}

        <div className={styles.badges}>
            <div className={styles.badge}>
              <img src={require('../src/image/tryout badge.png')} width="27"/>
              <span className={styles.tooltip}>사전집중교육</span>
            </div>

            <div className={styles.badge}>
              <img src={require('../src/image/interview badge.png')} width="27"/>
              <span className={styles.tooltip}>면접</span>
            </div>
          <div className={styles.badge}>
            <img src={require('../src/image/coding test badge.png')} width="27"/>
            <span className={styles.tooltip}>코딩테스트</span>
          </div>

          <div className={styles.badge}>
            <img src={require('../src/image/aptitude badge.png')} width="27"/>
            <span className={styles.tooltip}>적성검사</span>
          </div>
        </div>


        {/*Table*/}

        <div className={styles.users}>
          <table className={styles.thetable}>
            <thead>
              <tr className={styles.rowtitle}>
                <th className={styles.title}></th>
                {/*<th className={styles.title}>주관</th>*/}
                {/*<th className={styles.title}>지원자격</th>*/}
                <th className={styles.title}>모집인원</th>
                <th className={styles.title}>교육기간</th>
                <th className={styles.title}>혜택</th>
                {/*<th className={styles.title}>교육지역</th>*/}
                <th className={styles.title}>선발과정</th>
              </tr>
            </thead>


            {/*42Seoul*/}


              <tr className={styles.row}>
                <td className={styles.cell}><Link href="/ftseoul"><a className={styles.cellheader}>42 Seoul</a></Link></td>
                {/*<td className={styles.cell}>이노베이션 아카데미</td>*/}
                {/*<td className={styles.cell}>1차 온라인테스트 <br/> 2차 4주 집중교육</td>*/}
                {/*<td className={styles.cell}>해당년도 <br/> 1월 1일 기준 <br/>성인</td>*/}
                <td className={styles.cell}>기수 당 240여명</td>
                <td className={styles.cell}>최대 2년</td>
                <td className={styles.cell}>월 100만원</td>
                {/*<td className={styles.cell}>강남구 개포디지털혁신파크</td>*/}
                <td className={styles.cell}>
                  <div className={styles.cellbadges}>
                    <div className={styles.true}><Aptitude/></div>
                    <div className={styles.false}><CodingTest/></div>
                    <div className={styles.false}><Interview/></div>
                    <div className={styles.true}><Tryout/></div>
                  </div>
                </td>
              </tr>


              {/*SSAFY*/}

              <tr className={styles.row}>
                <td className={styles.cell}><Link href="/ssafy"><a className={styles.cellheader}>SSAFY</a></Link></td>
                {/*<td className={styles.cell}>삼성</td>*/}
                {/*<td className={styles.cell}>1차 온라인 CBT <br/>2차 현장 CBT, 면접</td>*/}
                {/*<td className={styles.cell}>만29세 이하의 <br/>대졸, 미취업자, 군필</td>*/}
                <td className={styles.cell}>1000여명</td>
                <td className={styles.cell}>1년</td>
                <td className={styles.cell}>월 100만원</td>
                {/*<td className={styles.cell}>지역별 상이</td>*/}
                <td className={styles.cell}>
                  <div className={styles.cellbadges}>
                    <div className={styles.true}><Aptitude/></div>
                    <div className={styles.false}><CodingTest/></div>
                    <div className={styles.true}><Interview/></div>
                    <div className={styles.false}><Tryout/></div>
                  </div>
                </td>
              </tr>


              {/*네이버 부스트캠프*/}

              <tr className={styles.row}>
                <td className={styles.cell}><Link href="/boostcamp"><a className={styles.cellheader}>네이버 부스트캠프</a></Link></td>
                {/*<td className={styles.cell}>네이버</td>*/}
                {/*<td className={styles.cell}>1차 온라인코딩테스트<br/>2차 온라인코딩테스트<br/>4주 부스트캠프 챌린지</td>*/}
                {/*<td className={styles.cell}>개발 경력 2년 미만</td>*/}
                <td className={styles.cell}>미정-챌린지 과정 수료자</td>
                <td className={styles.cell}>4개월</td>
                <td className={styles.cell}> - </td>
                {/*<td className={styles.cell}>역삼역/뚝섬역 베이스캠프</td>*/}
                <td className={styles.cell}>
                  <div className={styles.cellbadges}>
                    <div className={styles.false}><Aptitude/></div>
                    <div className={styles.true}><CodingTest/></div>
                    <div className={styles.false}><Interview/></div>
                    <div className={styles.true}><Tryout/></div>
                  </div>
                </td>
              </tr>


              {/*SW 마에스트로*/}


              <tr className={styles.row}>
                <td className={styles.cell}><Link href="/soma"><a className={styles.cellheader}>SW마에스트로</a></Link></td>
                {/*<td className={styles.cell}>한국정보산업연합</td>*/}
                {/*<td className={styles.cell}>서류심사<br/>온라인코딩테스트<br/>인적성검사<br/>심층면접</td>*/}
                {/*<td className={styles.cell}>SW개발 능력을 갖춘 <br/>미취업자</td>*/}
                <td className={styles.cell}>140명</td>
                <td className={styles.cell}>6개월</td>
                <td className={styles.cell}>월 100만원<br/>IT기기 140만원</td>
                <td className={styles.cell}>
                  <div className={styles.cellbadges}>
                    <div className={styles.true}><Aptitude/></div>
                    <div className={styles.true}><CodingTest/></div>
                    <div className={styles.true}><Interview/></div>
                    <div className={styles.false}><Tryout/></div>
                  </div>
                </td>
                {/*<td className={styles.cell}>서울 강남구</td>*/}
              </tr>



              {/*우아한테크코스*/}

              <tr className={styles.row}>
                <td className={styles.cell}><Link href="/woowa"><a className={styles.cellheader}>우아한테크코스</a></Link></td>
                {/*<td className={styles.cell}>우아한형제들</td>*/}
                {/*<td className={styles.cell}>온라인코딩테스트<br/>3주 프리코스<br/>최종 코딩테스트</td>*/}
                {/*<td className={styles.cell}>프로그래밍에 대한<br/>기본지식</td>*/}
                <td className={styles.cell}>약 40명</td>
                <td className={styles.cell}>약 10개월</td>
                <td className={styles.cell}>월 50만원</td>
                <td className={styles.cell}>
                  <div className={styles.cellbadges}>
                    <div className={styles.false}><Aptitude/></div>
                    <div className={styles.true}><CodingTest/></div>
                    <div className={styles.false}><Interview/></div>
                    <div className={styles.true}><Tryout/></div>
                  </div>
                </td>
                {/*<td className={styles.cell}>잠실역 한국루터회관</td>*/}
              </tr>

          </table>
        </div>
      </div>
      <Header>
        <div className={styles.mobileheader}>
    <br/>
    <h1>2020년 부트캠프</h1>
          <p>무료 부트캠프 연간 일정은 웹사이트 혹은 가로모드에서 지원됩니다</p>
    <br/><br/> <br/>
        </div>
      </Header>
    </>
  );
}
