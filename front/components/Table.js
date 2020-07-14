import styles from './Table.module.css';
import React from "react";
import classNames from 'classnames';
import Link from 'next/link';

const Table = () => {
    return (
      <>
      <div className={styles.wrapper}>

        <div className={styles.users}>
          <table className={styles.thetable}>
            <thead>
              <tr className={styles.rowtitle}>
                <th className={styles.title}></th>
                {/*<th className={styles.title}>주관</th>*/}
                <th className={styles.title} width="230">선발과정</th>
                {/*<th className={styles.title}>지원자격</th>*/}
                <th className={styles.title}>모집인원</th>
                <th className={styles.title}>교육기간</th>
                <th className={styles.title}>혜택</th>
                {/*<th className={styles.title}>교육지역</th>*/}
              </tr>
            </thead>

            <tr className={styles.row}>

              <td className={styles.cell}><Link href="/ftseoul"><a className={styles.cellheader}>42Seoul</a></Link></td>

              {/*<td className={styles.cell}>이노베이션 아카데미</td>*/}

              <td className={styles.cell}>1차 온라인테스트 <br/> 2차 4주 집중교육</td>
              {/*<td className={styles.cell}>해당년도 <br/> 1월 1일 기준 <br/>성인</td>*/}
              <td className={styles.cell}>기수 당 250여명</td>
              <td className={styles.cell}>최대 2년</td>
              <td className={styles.cell}>월 100만원</td>
              {/*<td className={styles.cell}>강남구 개포디지털혁신파크</td>*/}
            </tr>

            <tr className={styles.row}>
              <td className={styles.cell}><Link href="/ssafy"><a className={styles.cellheader}>SSAFY</a></Link></td>

              {/*<td className={styles.cell}>삼성</td>*/}

              <td className={styles.cell}>1차 온라인 CBT <br/>2차 현장 CBT, 면접</td>
              {/*<td className={styles.cell}>만29세 이하의 <br/>대졸, 미취업자, 군필</td>*/}
              <td className={styles.cell}>1000여명</td>
              <td className={styles.cell}>1년</td>
              <td className={styles.cell}>월 100만원</td>
              {/*<td className={styles.cell}>지역별 상이</td>*/}
            </tr>

            <tr className={styles.row}>


              <td className={styles.cell}><Link href="/soma"><a className={styles.cellheader}>SW마에스트로</a></Link></td>

              {/*<td className={styles.cell}>한국정보산업연합</td>*/}

              <td className={styles.cell}>서류심사<br/>온라인코딩테스트<br/>인적성검사<br/>심층면접</td>
              {/*<td className={styles.cell}>SW개발 능력을 갖춘 <br/>미취업자</td>*/}
              <td className={styles.cell}>150명</td>
              <td className={styles.cell}>6개월</td>
              <td className={styles.cell}>월 100만원<br/>IT기기 150만원</td>
              {/*<td className={styles.cell}>서울 강남구</td>*/}
            </tr>

            <tr className={styles.row}>
              <td className={styles.cell}><Link href="/boostcamp"><a className={styles.cellheader}>네이버 부스트캠프</a></Link></td>
              {/*<td className={styles.cell}>네이버</td>*/}
              <td className={styles.cell}>1차 온라인코딩테스트<br/>2차 온라인코딩테스트<br/>4주 부스트캠프 챌린지</td>
              {/*<td className={styles.cell}>개발 경력 2년 미만</td>*/}
              <td className={styles.cell}>미정-챌린지 과정 수료자</td>
              <td className={styles.cell}>4개월</td>
              <td className={styles.cell}> - </td>
              {/*<td className={styles.cell}>역삼역/뚝섬역 베이스캠프</td>*/}
            </tr>

            <tr className={styles.row}>
              <td className={styles.cell}><Link href="/woowa"><a className={styles.cellheader}>우아한테크코스</a></Link></td>
              {/*<td className={styles.cell}>우아한형제들</td>*/}
              <td className={styles.cell}>온라인코딩테스트<br/>3주 프리코스<br/>최종 코딩테스트</td>
              {/*<td className={styles.cell}>프로그래밍에 대한<br/>기본지식</td>*/}
              <td className={styles.cell}>약 50명</td>
              <td className={styles.cell}>약 10개월</td>
              <td className={styles.cell}>월 100만원</td>
              {/*<td className={styles.cell}>잠실역 한국루터회관</td>*/}
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Table;