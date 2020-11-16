import Layout from "../components/Layout";
import Header from "../components/Header";
import React, { useEffect } from "react";
import Timeline from "../components/bootcamp/Timeline";
import Faq from "../components/Faq"
import Review from "../components/Review";
import { useDispatch } from 'react-redux';
import { programChanger } from '../redux/actions/programChangerAction';

const Ssafy = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(programChanger('ssafy'));
  },[])

  return (
    <Layout>
      <Timeline />
      <Header>
        <h2>자주 묻는 질문</h2>
        <p>더 자세한 내용을 항목별로 알아보세요.</p>
      </Header>
      <Faq />
      <Header>
        <h2>부트캠프 참여후기</h2>
        <p>솔직담백한 이야기를 공유합니다.</p>
      </Header>
      <Review />
    </Layout>
  );
}

export default Ssafy;