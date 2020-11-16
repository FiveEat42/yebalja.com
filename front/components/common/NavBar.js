import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNavbarData } from "../../redux/actions/navbarAction";
import styles from "./NavBar.module.css";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import LogoWhite from "./LogoWhite";
import RollingNotice from "./RollingNotice";

const navListDummy = [
  { title: "부트캠프",
    href: "/bootcamp", 
    sublist : [
      {
        title: "42서울",
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
  { title: "탑스택스",
    href: "/topstacks", 
    sublist : [
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
        title: "에디터/IDE",
        href: "/editor",
      },
    ]
  }
]

function SubItem({ data }) {
  const router = useRouter();
  return (
    <>
      <li>
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

function MainItem({ data }) {
  const router = useRouter();
  return (
    <>
      <li>
        <Link href={data.href}>
          <a
            className={router.pathname == data.href ? "active" : ""}
          >
            {data.title}
          </a>
        </Link>
        <ul className={styles.nav_sub}>
          {data.sublist?.map((v) => (
            <SubItem data={v} key={v.title} />
          ))}
        </ul>
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
          {navListDummy?.map((v) => (
                <MainItem data={v} key={v.title} />
              ))}
        </ul>

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
