import styles from './NavBar.module.css'
import Link from 'next/link';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import classNames from 'classnames';
import { useRouter } from "next/router";


const NavBar = () => {

    const router = useRouter();

    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark" className={styles.navbarBg}>
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
                    <Nav>
                        <Nav.Link href="/sign-in">로그인</Nav.Link>
                        <Nav.Link href="/sign-up">회원가입</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;