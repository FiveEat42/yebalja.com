import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Faq from "../components/Faq"
import Review from "../components/Review";
import Timeline from '../components/Timeline';
import { useDispatch } from 'react-redux'

const Boostcamp = () => {
  const dispatch = useDispatch();
  dispatch({ type:'PROGRAM_CHANGER', data:'boostcamp'});
  
  //state를 변경
  //initState = { program : boostcamp } ㅇㅅㅇ => props 안써도됨
  // const dispatch = useDispatch(); // 디스패치 사용하도록하기
  // useEffect(()=>{
  //   const result = getData().then(function(result){
  //     console.log(result)
  //     dispatch(result) // dispatch(액션함수())로 변경? => plain object로 해야한다는 에러메시지
  //     // dispatch({type: result.type, payload: result.payload})
  //     // setData(result.payload.data);
  //   });
  // },[]);
  return (
  <Layout>
      <Timeline program="boostcamp"/>
    <Header>
      <h3>자주 묻는 질문</h3>
      <p>항목별로 더 자세한 내용을 알아보세요</p>
    </Header>
    <Faq program="boostcamp"/>
    <Header>
      <h3>부트캠프 참여후기</h3>
      <p>솔직담백한 이야기를 공유합니다</p>
    </Header>
    <Review program="boostcamp"/>
  </Layout>
  );
}

export default Boostcamp;