import React from 'react';
import styles from './NavBar.module.css'
import Link from 'next/link';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Button from "react-bootstrap/Button"
import Popover from "react-bootstrap/Popover"
import classNames from 'classnames';
import Form from 'react-bootstrap/Form';
import { useRouter } from "next/router";

function NavItem ({ data }) {

  const router = useRouter();

  return (
    <>
      <Link href={data.href}>
        <a className={classNames({["nav-link"]: true,
          [router.pathname == [data.href] ? "active" : ""]: true})}>
          {data.program}</a>
      </Link>
    </>
  )
}

function RollingItem ({ data }) {
  
  let enddateLeft = Math.floor((new Date(data.enddate).setHours(9) - new Date().setHours(9)) / (1000 * 60 * 60 * 24)) + 1;
  
  let status_content;

  if (enddateLeft > 1) {
    status_content  = `D-${enddateLeft}`;
  } else if (enddateLeft > 0) {
    status_content = `D-Day`
  } else {
    status_content = '마감';
  }

  return (
    <>
      <li>
        <a target="_blank" rel="noopener noreferrer" href={data.href}>
          <span className={styles.date}>{status_content}</span>
          <span className={styles.notice}>{data.title}</span>
        </a>
      </li>
    </>
  )
}

function ListItem ({ data, idx }) {
  
  return (
    <>
      <li className={styles.noticePopoverItem}>
        <a target="_blank" rel="noopener noreferrer" href={data.href}>
        <span>· {data.title}</span>
        </a>
      </li>
    </>
  )
}

export default function NavBar() {

  const navList = [
      {
        program: "42서울",
        href: "/ftseoul"
      },{
        program: "SSAFY",
        href: "/ssafy"
      },{
        program: "부스트캠프",
        href: "/boostcamp"
      },{
        program: "SOMA",
        href: "/soma"
      },{
        program: "우아한테크코스",
        href: "/woowa"
      },{
        program: "멋쟁이사자처럼",
        href: "/likelion"
      }
  ]

  const noticeList = [
    {
      title: "DREAMIN iOS Academy 교육생 모집",
      href: "https://dreamin.career/academy/ios",
      enddate: "2020-07-17",
    },{
      title: "광주AI사관학교",
      href: "http://ai.gitct.kr/apply/",
      enddate: "2020-05-31",
    },{
      title: "예발자닷컴 오픈",
      href: "https://yebalja.com",
      enddate: "2020-08-08",
    }
  ]

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark" className={styles.navbarBg}>
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="mr-auto">
              {navList.map((v) => <NavItem data={v} key={v.program}/>)}
          </Nav>

          <Form inline className={styles.noticeRolling}>
            <ul>
              {noticeList.map((v) => <RollingItem data={v} key={v.title}/>)}
            </ul>
          </Form>

          <OverlayTrigger trigger="click" placement="bottom" 
            overlay={
              <Popover id={`popover-positioned-bottom`}>
                <Popover.Title as="h3"> 💙 인기소식 모아보기 💙</Popover.Title>
                <Popover.Content className={styles.noticePopoverList}>
                    <ul id="noticePopoverList">
                      {noticeList.map((v, idx) => <ListItem data={v} key={v.title} id={idx}/>)}
                    </ul> 
                  </Popover.Content>
              </Popover>
            }>
            <Button variant="link" className={styles.noticeListHidden}>
              <img src={require('../src/image/Expand.png')} width="24" height="24" />
            </Button>
          </OverlayTrigger>

        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};