import React , { useCallback, useEffect, useState }from 'react';
import styles from './Faq.module.css';
import ListGroup from "react-bootstrap/ListGroup"
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import classNames from 'classnames';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getData, test } from '../redux/actions/faqAction';

function QnA ({list}) {
  return (
    <>
      <strong>Q. {list.q}</strong>
      <br />A. {list.a}
      <br /><br />
    </>
  );
};

function TabLeft({sub}) {
  return (
    <ListGroup.Item action href={sub.href}>
      {sub.title}
    </ListGroup.Item>
  )
}

function TabRight ({sub}) { 
  return (
    <Tab.Pane eventKey={sub.href}>
      {sub.qna.map((v, idx) => <QnA list={v} key={idx} />)}
    </Tab.Pane>
  );
}

function FaqTab({subList}) {
  return (
    <div className={classNames({["row"]: true, ["justify-content-md-center"]: true})}>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey={subList[0].href}>
        <div className={"col-md-3"}>
          <ListGroup className={styles.secondTab}>
            {subList.map((v, idx) => <TabLeft sub={v} key={idx} />)}
          </ListGroup>
        </div>

        <div className={classNames({["col-md-9"]: true, [styles.content]: true})}>
          <Tab.Content>
            {subList.map((v, idx) => <TabRight sub={v} key={idx} />)}
          </Tab.Content>
        </div>
      </Tab.Container>
    </div>
  );
}

export default function Faq() {
  //program을 리덕스로 관리해서 받아와야함.boostcamp : 1
  const faqData = useSelector((state) => state.faqReducer);
  const program = useSelector((state) => state.programsReducer.data);
  const dispatch = useDispatch(); // 디스패치 사용하도록하기
  useEffect(()=>{
    getData().then(function(result){
      dispatch(result) 
    });
  },[]);
  const dataList = faqData.data[program] ?? [];
  return (
    <div className={styles.firstTab}>
      <Tabs defaultActiveKey={dataList[0]?.eventKey} transition={false}>
        {dataList.map((v, idx) => (
          <Tab eventKey={v.eventKey} title={v.category} key={idx}>
            <FaqTab subList={v.subCategory} key={idx}/>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}


//axios 설명

// export default function Faq({program}) {
//   //program을 리덕스로 관리해서 받아와야함.

//   const myData = useSelector((state) => state.faqReducer);

//   const dispatch = useDispatch(); // 디스패치 사용하도록하기
//   console.log(myData);

//   let [dataList2, setData] = useState([]);
//   useEffect(()=>{
// 		async function fetchData(){
//       const result = await axios.get('http://localhost:5000/api/json/faq');
//       console.log(result)
//       setData(result.data);
//       }
//       fetchData();
//   },[]);
//   let dataList = dataList2[program] ?? [];

//   return (
//     <div className={styles.firstTab}>
//       <Tabs defaultActiveKey={dataList[0]?.eventKey} transition={false}>
//         {dataList.map((v, idx) => (
//           <Tab eventKey={v.eventKey} title={v.category} key={idx}>
//             <FaqTab subList={v.subCategory} key={idx}/>
//           </Tab>
//         ))}
//       </Tabs>
//     </div>
//   );
// }