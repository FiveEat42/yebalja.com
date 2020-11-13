import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNavbarData } from "../../redux/actions/navbarAction";
import styles from "./Navbar.module.css";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import LogoWhite from "./LogoWhite";
import RollingNotice from "./RollingNotice";

export default function NavBar() {
  const navbarData = useSelector((state) => state.navbarReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    getNavbarData().then(function (result) {
      dispatch(result);
    });
  }, []);

  // const navList = {
  //   bootcamp: [
  //     {
  //       program: "42서울",
  //       href: "/ftseoul",
  //     },
  //     {
  //       program: "SSAFY",
  //       href: "/ssafy",
  //     },
  //     {
  //       program: "부스트캠프",
  //       href: "/boostcamp",
  //     },
  //     {
  //       program: "SOMA",
  //       href: "/soma",
  //     },
  //     {
  //       program: "우아한테크코스",
  //       href: "/woowa",
  //     },
  //     {
  //       program: "멋쟁이사자처럼",
  //       href: "/likelion",
  //     },
  //   ],
  //   topstacks: [
  //     {
  //       topic: "언어",
  //       href: "/language",
  //     },
  //     {
  //       topic: "프론트엔드",
  //       href: "/frontend",
  //     },
  //     {
  //       topic: "백엔드",
  //       href: "/backend",
  //     },
  //     ,
  //     {
  //       topic: "DBMS",
  //       href: "/dbms",
  //     },
  //     {
  //       topic: "딥러닝",
  //       href: "/deeplearning",
  //     },
  //     {
  //       topic: "에디터",
  //       href: "/editor",
  //     },
  //   ],
  // };
  const navList = navbarData ?? [];

  return (
    <div className={styles.box}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <LogoWhite /> 예발자닷컴
            </a>
          </Link>
        </div>

        <ul className={styles.nav}>
          <li>
            <Link href="/">
              <a>부트캠프</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>탑스택스</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>뭐라도넣자</a>
            </Link>
          </li>
        </ul>

        <i className={styles.toggle}>
          <span></span>
          <span></span>
        </i>

        <div className={styles.notice}>
          <RollingNotice />
        </div>
      </div>
    </div>
  );
}
