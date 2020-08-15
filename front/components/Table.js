import styles from './Table.module.css';
import classNames from 'classnames';
import Link from 'next/link';
import Header from "./Header";
import TableRow from './TableRow';
import BadgeDescription from "./BadgeDescription";


export default function Table() {

  const tableList = [
    {
      program: '42서울',
      link: '/ftseoul',
      number_of_recruits: '기수 당 240여명',
      edu_period: '최대 2년',
      grant: '월 100만원',
      aptitude: 'true',
      coding: 'false',
      interview: 'false',
      tryout: 'true',
    },
    {
      program: 'SSAFY',
      link: '/ssafy',
      number_of_recruits: '1000여명',
      edu_period: '1년',
      grant: '월 100만원',
      aptitude: 'true',
      coding: 'false',
      interview: 'true',
      tryout: 'false',
    },
    {
      program: '네이버 부스트캠프',
      link: '/boostcamp',
      number_of_recruits: '챌린지 기준 250명',
      edu_period: '4개월',
      grant: '-',
      aptitude: 'false',
      coding: 'true',
      interview: 'false',
      tryout: 'true',
    },
    {
      program: 'SW마에스트로',
      link: '/soma',
      number_of_recruits: '140명',
      edu_period: '6개월',
      grant: '월 100만원<br>IT기기 140만원',
      aptitude: 'true',
      coding: 'true',
      interview: 'true',
      tryout: 'false',
    },
    {
      program: '우아한테크코스',
      link: '/woowa',
      number_of_recruits: '약 40명',
      edu_period: '약 10개월',
      grant: '월 50만원',
      aptitude: 'false',
      coding: 'true',
      interview: 'false',
      tryout: 'true',
    },
  ]

    return (
      <>
      <div className={styles.wrapper}>
        <BadgeDescription />
        <div className={styles.users}>
          <table className={styles.thetable}>
            <thead>
              <tr className={styles.rowtitle}>
                <th className={styles.title}></th>
                <th className={styles.title}>모집인원</th>
                <th className={styles.title}>교육기간</th>
                <th className={styles.title}>지원</th>
                <th className={styles.title}>선발과정</th>
              </tr>
            </thead>
            {tableList.map((v, idx) => <TableRow data={v} key={idx} />)}
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
