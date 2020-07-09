import styles from './Header.module.css'
import Link from 'next/link';

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <div>
      <span>
        <Link href="/"><a className={styles.brand}>예발자닷컴</a></Link>
        <span className={styles.default}>&nbsp;예비개발자를 위한</span>
      </span>
      <Navbar collapseOnSelect expand="lg" variant="dark" className={styles.navbarBg}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="예발자코스" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">42서울</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">SSAFY</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">네이버 부스트캠프</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">우아한 테크코스</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">멋쟁이 사자처럼</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">SW 마에스트로</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">스마일게이트</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">&nbsp;Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about">&nbsp;ABOUT</Nav.Link>
            <Nav.Link href="#faq">&nbsp;FAQ</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#pricing">&nbsp;로그인</Nav.Link>
            <Nav.Link href="#pricing">&nbsp;회원가입</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;