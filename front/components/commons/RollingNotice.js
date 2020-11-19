import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNoticeData } from "../../redux/actions/noticeAction";
import styles from "./RollingNotice.module.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import Form from "react-bootstrap/Form";

function RollingItem({ data }) {
  /* 남은 날짜, 시간에 따라 D-Day 표현방식(status) 결정 */
  let status;
  let target = new Date(data.enddate);
  let today = new Date();

  if (today > target) {
    status = "마감";
  } else if (target.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0)) {
    status = "D-Day";
  } else {
    status = `D-${(target - today) / (60 * 60 * 24 * 1000)}`;
  }

  return (
    <>
      <li>
        <a target="_blank" rel="noopener noreferrer" href={data.href}>
          <span className={styles.date}>{status}</span>
          <span className={styles.title}>{data.title}</span>
        </a>
      </li>
    </>
  );
}

function List({ data }) {
  return (
    <>
      <li className={styles.noticePopoverItem}>
        <a target="_blank" rel="noopener noreferrer" href={data.href}>
          <span>· {data.title}</span>
        </a>
      </li>
    </>
  );
}

export default function RollingNotice() {
  const noticeData = useSelector((state) => state.noticeReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    getNoticeData().then(function (result) {
      dispatch(result);
    });
  }, []);

  const noticeList = noticeData ?? [];

  return (
    <div className={styles.notice}>
      <Form inline className={styles.noticeRolling}>
        <ul>
          {noticeList?.map((v) => (
            <RollingItem data={v} key={v.title} />
          ))}
        </ul>
      </Form>

      <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={
          <Popover id={`popover-positioned-bottom`} className={styles.noticePopover}>
            <Popover.Title className={styles.noticePopoverTitle}>실시간 모집공고</Popover.Title>
            <Popover.Content className={styles.noticePopoverList}>
              <ul id="noticePopoverList">
                {noticeList?.map((v, idx) => (
                  <List data={v} key={v.title} id={idx} />
                ))}
              </ul>
            </Popover.Content>
          </Popover>
        }>
        <Button variant="link" className={styles.buttonPopover}>
          <img src={require("../../srcs/commons/Expand.png")} width="24" height="24" />
        </Button>
      </OverlayTrigger>
    </div>
  );
}
