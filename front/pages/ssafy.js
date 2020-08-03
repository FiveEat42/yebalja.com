import Layout from "../components/Layout";
import Header from "../components/Header";
import React from "react";
import Timeline from "../components/Timeline";
import Faq from "../components/Faq"

const Saffy = () => {
    return (
    <Layout>
      <Timeline program="ssafy"/>
      <Header>
        <h3>자주 묻는 질문</h3>
        <p>항목별로 더 자세한 내용을 알아보세요</p>
      </Header>
      <Faq program="ssafy"/>
      <Header>
          <h4>프로그램 참여후기</h4>
          <p>추가예정</p>
      </Header>
  </Layout>
    );
}

export default Saffy;