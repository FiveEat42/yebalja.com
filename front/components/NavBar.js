import styles from './NavBar.module.css'
import Link from 'next/link';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import classNames from 'classnames';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { useRouter } from "next/router";


const NavBar = () => {

    const router = useRouter();

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" className={styles.navbarBg}>
                <Navbar.Brand></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link href="/ftseoul">
                            <a className={classNames({["nav-link"]: true,
                                [router.pathname == "/ftseoul" ? "active" : ""]: true})}>
                                42서울</a>
                        </Link>
                        <Link href="/ssafy">
                            <a className={classNames({["nav-link"]: true,
                                [router.pathname == "/ssafy" ? "active" : ""]: true})}>
                                SSAFY</a>
                        </Link>
                        <Link href="/boostcamp">
                            <a className={classNames({["nav-link"]: true,
                                [router.pathname == "/boostcamp" ? "active" : ""]: true})}>
                                부스트캠프</a>
                        </Link>
                        <Link href="/soma">
                            <a className={classNames({["nav-link"]: true,
                                [router.pathname == "/soma" ? "active" : ""]: true})}>
                                SOMA</a>
                        </Link>
                        <Link href="/woowa">
                            <a className={classNames({["nav-link"]: true,
                                [router.pathname == "/woowa" ? "active" : ""]: true})}>
                                우아한테크코스</a>
                        </Link>
                        <Link href="/likelion">
                            <a className={classNames({["nav-link"]: true,
                                [router.pathname == "/likelion" ? "active" : ""]: true})}>
                                멋쟁이사자처럼</a>
                        </Link>
                    </Nav>
                    <Form inline className={styles.rolling}>
                        <div>
                            <span><a href="https://dreamin.career/academy/ios">
                                [D-2](~7/17) DREAMIN iOS Academy 교육생 모집
                            </a></span>
                            <span><a href="http://ai.gitct.kr/apply/">
                                [마감](~5/31) 광주AI사관학교
                            </a></span>
                            <span><a href="https://dreamin.career/academy/ios">
                                [D-2](~7/17) DREAMIN iOS Academy 교육생 모집
                            </a></span>
                        </div>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;