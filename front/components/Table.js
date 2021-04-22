import styles from "./Table.module.css";
import classNames from "classnames";
import Link from "next/link";
import Header from "./Header";
import TableRow from "./TableRow";
import BadgeDescription from "./BadgeDescription";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTableData } from "../redux/actions/tableAction";

export default function Table() {
  const tableData = useSelector((state) => state.tableReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    getTableData().then(function (result) {
      dispatch(result);
    });
  }, []);
  const tableList = tableData ?? [];

  return (
    <>
      <div className={styles.wrapper}>
        <BadgeDescription />
        <div className={styles.users}>
          <table className={styles.thetable}>
            <thead>
              <tr className={styles.rowtitle}>
                <th className={styles.title}></th>
                <th className={styles.title}>모집인원</th>
                <th className={styles.title}>교육기간</th>
                <th className={styles.title}>지원금</th>
                <th className={styles.title}>선발과정</th>
              </tr>
            </thead>
            {tableList?.map((v, idx) => (
              <TableRow data={v} key={idx} />
            ))}
          </table>
        </div>
      </div>
      <Header>
        <div className={styles.mobileheader}>
          <br />
          <h1>{new Date().getFullYear()}년 부트캠프</h1>
          <p>
            무료 부트캠프 연간 일정은 웹사이트 혹은 가로모드에서 지원됩니다.
          </p>
          <br />
          <br /> <br />
        </div>
      </Header>
    </>
  );
}
