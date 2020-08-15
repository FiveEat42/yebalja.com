import React , { useCallback, useEffect, useState }from 'react';
import styles from './FAQ.module.css';
import ListGroup from "react-bootstrap/ListGroup"
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import classNames from 'classnames';

import { useDispatch, useSelector } from 'react-redux';
import { getFaqData } from '../redux/actions/faqAction';

function QnA ({list}) {

  return (
    <>
      <div className={styles.question}>{list.q}</div>
      <div className={styles.answer}>{list.a}</div>
    </>
  );
};

function SubTab({sub}) {

  return (
    <ListGroup.Item href={sub.href} className={styles.listitem}>
      · {sub.title} ·
    </ListGroup.Item>
  )
}

function ContentBox ({sub}) {

  return (
    <Tab.Pane eventKey={sub.href}>
      {sub.qna.map((v, idx) => <QnA list={v} key={idx} />)}
    </Tab.Pane>
  );
}

function FaqTab({subList}) {

  return (
    <Tab.Container defaultActiveKey={subList[0].href}>
      <ListGroup horizontal className={styles.subTab}>
        {subList.map((v, idx) => <SubTab sub={v} key={idx} />)}
      </ListGroup>
      <Tab.Content className={styles.content}>
        {subList.map((v, idx) => <ContentBox sub={v} key={idx} />)}
      </Tab.Content>
    </Tab.Container>
  );
}

export default function Faq() {
  //program을 리덕스로 관리해서 받아와야함.boostcamp : 1
  const faqData = useSelector((state) => state.faqReducer);
  const program = useSelector((state) => state.programReducer.data);
  const dispatch = useDispatch(); // 디스패치 사용하도록하기

  useEffect(()=>{
    getFaqData().then(function(result){
      dispatch(result) 
    });
  },[]);
  const dataList = faqData.data[program] ?? [];

  return (
    <div className={styles.container}>
      <Tabs defaultActiveKey={dataList[0]?.eventKey} transition={false}
      className={classNames({ "justify-content-center": true, [styles.mainTab]: true })}>  
        {dataList.map((v, idx) => (
          <Tab eventKey={v.eventKey} title={v.category} key={idx}>
            <FaqTab subList={v.subCategory} key={idx}/>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}