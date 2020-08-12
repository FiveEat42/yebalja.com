import Layout from "../components/Layout";
import Header from "../components/Header";
import React from "react";
import Timeline from "../components/Timeline";
import Faq from "../components/Faq"
import Review from "../components/Review";

const Woowa = () => {
    return (
    <Layout>
      <Timeline program="woowa"/>
      <Header>
        <h2>자주 묻는 질문</h2>
        <p>항목별로 더 자세한 내용을 알아보세요</p>
      </Header>
      <Faq program="woowa"/>
      <Header>
            <h2>부트캠프 참여후기</h2>
            <p>솔직담백한 이야기를 공유합니다</p>
        </Header>
        <Review program="woowa"/>
  </Layout>
    );
}

export default Woowa;