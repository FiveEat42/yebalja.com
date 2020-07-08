import styles from './Jumbotron.module.css'
import Ham from './Hamburger';
import Link from 'next/link';

const Jumbotron = () => {
  return (
    <>
      <div className={styles.box}> {/* 점보트론입니다. */}
        <div className={styles.container}> {/* 일단 넣었는데 빼도 될 것 같기도하네요 */}

          {/*
            예발자 일러스트를 png로 불러왔습니다. svg는 연구 중입니다.
          */}
          <img className={styles.image} src={require('../src/images/illustration.png')}/>


          {/*
            햄버거 모양입니다. 화면이 줄었을 때 호버로 목록을 보여주고 싶어요
          */}
          <div>
            <Link href="/">
              <img className={styles.burger} src={require('../src/images/hamburger.png')} width="35px" />
            </Link>
          </div>

          {/*
            내비게이션 목록입니다
          */}
          <div className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.element}>
                <Link href="/bootcamp"><a className={styles.a}>무료부트캠프</a></Link>
              </li>
              <li className={styles.element}>
                <Link href="/about"><a className={styles.a}>About</a></Link>
              </li>
              <li className={styles.element}>
                <Link href="/faq"><a className={styles.a}>FAQ</a></Link>
              </li>
            </ul>
          </div>

          {/*
            점보트론 내 글귀입니다.
          */}
          <div className={styles.text}>
            <h1 className={styles.title}>누구나,<br/>예발자 시절이 있었으니까</h1><br/>
            <p className={styles.content}>예비개발자를 위한 코딩교육과정,<br/>부트캠프를 만나보세요.</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Jumbotron;