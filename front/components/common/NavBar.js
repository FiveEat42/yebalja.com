import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNavbarData } from "../../redux/actions/navbarAction";
import styles from "./NavBar.module.css";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import LogoWhite from "./LogoWhite";
import RollingNotice from "./RollingNotice";

const navListDummy = {
  bootcamp: [
    {
      title: "한눈에보기",
      href: "/bootcamp",
    },
    {
      title: "42서울",
      href: "/ftseoul",
    },
    {
      title: "SSAFY",
      href: "/ssafy",
    },
    {
      title: "부스트캠프",
      href: "/boostcamp",
    },
    {
      title: "SOMA",
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
  topstacks: [
    {
      title: "언어",
      href: "/language",
    },
    {
      title: "프론트엔드",
      href: "/frontend",
    },
    {
      title: "백엔드",
      href: "/backend",
    },
    ,
    {
      title: "DBMS",
      href: "/dbms",
    },
    {
      title: "딥러닝",
      href: "/deeplearning",
    },
    {
      title: "에디터",
      href: "/editor",
    },
  ],
};

function NavItem({ data }) {
  const router = useRouter();
  return (
    <>
      <li className={styles.subitem}>
        <Link href={data.href}>
          <a
            className={router.pathname == data.href ? "active" : ""}
          >
            {data.title}
          </a>
        </Link>
      </li>
    </>
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
    <div className={styles.box}>
      <div className={styles.navbar}>
        {/* 로고 */}
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <LogoWhite /> 예발자닷컴
            </a>
          </Link>
        </div>

        {/* 내비 main */}
        <ul className={styles.nav_main}>
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
        </ul>

        {/* 내비 sub */}
        <div className={styles.nav_sub}>
          <ul>
            {navListDummy.bootcamp?.map((v) => (
              <NavItem data={v} key={v.title} />
            ))}
          </ul>
          <ul>
            {navListDummy.topstacks?.map((v) => (
              <NavItem data={v} key={v.title} />
            ))}
          </ul>
        </div>

        <div className={styles.toggle}>
          <span></span>
          <span></span>
        </div>

        <div className={styles.notice}>
          <RollingNotice />
        </div>
      </div>
    </div>
  );
}
