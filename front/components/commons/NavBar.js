import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNoticeData } from "../../redux/actions/noticeAction";
import { getNavbarData } from "../../redux/actions/navbarAction";
import styles from "./NavBar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import classNames from "classnames";

const navListDummy = [
  {
    title: "어디서 배울까",
    sublist: [
      {
        title: "비교하기",
        href: "/bootcamps",
      },
      {
        title: "42SEOUL",
        href: "/ftseoul",
      },
      {
        title: "삼성 SSAFY",
        href: "/ssafy",
      },
      {
        title: "네이버 부스트캠프",
        href: "/boostcamp",
      },
      {
        title: "SW마에스트로",
        href: "/soma",
      },
      {
        title: "우아한테크코스",
        href: "/woowa",
      },
      {
        title: "멋쟁이사자처럼",
        href: "/likelion",
      },
    ],
  },
  {
    title: "무엇을 배울까",
    sublist: [
      {
        title: "프로그래밍 언어",
        href: "/language",
      },
      {
        title: "웹 프론트엔드",
        href: "/frontend",
      },
      {
        title: "웹 백엔드",
        href: "/backend",
      },
      {
        title: "DBMS",
        href: "/dbms",
      },
      {
        title: "딥러닝",
        href: "/deeplearning",
      },
      {
        title: "에디터/IDE",
        href: "/editor",
      },
    ],
  },
];

function NavItem({ data }) {
  const router = useRouter();

  return (
    <div className={styles.nav_sub}>
      <Link href={data.href}>
        <a
          className={classNames({
            ["nav-link"]: true,
            [router.pathname == [data.href] ? "active" : ""]: true,
          })}>
          {data.title}
        </a>
      </Link>
    </div>
  );
}

export default function NavBar() {
  const navbarData = useSelector((state) => state.navbarReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    getNavbarData().then(function (result) {
      dispatch(result);
    });
  }, []);

  const navList = navbarData ?? [];

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark" className={styles.nav_background}>
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <ul>
              <li className={styles.nav_main}>
                <h3>{navListDummy[0].title}</h3>
                {navListDummy[0].sublist?.map((v) => (
                  <NavItem data={v} key={v.title} />
                ))}
              </li>
              <li className={styles.nav_main}>
                <h3>{navListDummy[1].title}</h3>
                {navListDummy[1].sublist?.map((v) => (
                  <NavItem data={v} key={v.title} />
                ))}
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
