import Layout from "../components/Layout";
import Header from "../components/Header";
import React from "react";
import Faq from "../components/Faq";
import Review from "../components/Review";
import Timeline from '../components/Timeline';

const ftseoul = () => {
  return (
    <Layout>
      <Timeline program="ftseoul"/>
      <Header>
        <h2>자주 묻는 질문</h2>
        <p>항목별로 더 자세한 내용을 알아보세요</p>
      </Header>
      <Faq program="ftseoul"/>
      <Header>
        <h2>부트캠프 참여후기</h2>
        <p>솔직담백한 이야기를 공유합니다</p>
      </Header>
      <Review program="ftseoul"/>
    </Layout>
  );
}

export default ftseoul;