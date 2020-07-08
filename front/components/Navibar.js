import Link from 'next/link';
import styles from './Navibar.module.css'
import Container from "react-bootstrap";

const Navibar = () => {
    return (
        <div className={styles.box}>
            <div>
                <Link href="/">
                    <img className={styles.burger} src={require('../src/images/hamburger.png')} width="35px" />
                </Link>
            </div>
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
        </div>
    );
};

export default Navibar;