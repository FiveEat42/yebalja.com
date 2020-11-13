import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNavbarData } from "../../redux/actions/navbarAction";
import styles from "./NavSub.module.css";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";

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
      <li>
        <Link href={data.href}>
          <a
            className={router.pathname == [data.href] ? "active" : ""}
          >
            {data.title}
          </a>
        </Link>
      </li>
    </>
  );
}

export default function NavSub({ category }) {

  return (
        <div className={styles.box}>
          <ul>
            {navListDummy[category]?.map((v) => (
              <NavItem data={v} key={v.title} />
            ))}
          </ul>
          {/* <ul className={styles.topstacks}>
            {navListDummy.topstacks?.map((v) => (
              <NavItem data={v} key={v.title} />
            ))}
          </ul> */}
        </div>
  );
}