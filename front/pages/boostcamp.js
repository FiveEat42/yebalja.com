import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Faq from "../components/Faq"
import Review from "../components/Review";
import Timeline from '../components/HorizontalTimeline';
import styles from "../components/HorizontalTimeline.module.css";


const Boostcamp = () => {

  return (
    <Layout>
      <Timeline/>

      <Header>
        <h3>자주 묻는 질문</h3>
        <p>항목별로 더 자세한 내용을 알아보세요</p>
      </Header>
      <Faq program="boostcamp"/>
      
      <Header>
        <h3>부트캠프 참여후기</h3>
        <p>솔직담백한 이야기를 공유합니다</p>
      </Header>
      <Review />
    </Layout>
  );
}

export default Boostcamp;