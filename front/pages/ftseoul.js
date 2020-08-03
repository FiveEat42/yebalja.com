import Layout from "../components/Layout";
import Header from "../components/Header";
import React from "react";
import Faq from "../components/Faq"

const ftseoul = () => {
  return (
    <Layout>
      <div>
          <Header>
              <h2>42서울</h2>
              <p>이노베이션 아카데미의 소프트웨어 개발자 양성프로그램입니다.</p>
          </Header>
          <Header>
              <h4>타임라인</h4>
              <p>추가예정</p>
          </Header>
          <Header>
            <h3>자주 묻는 질문</h3>
            <p>항목별로 더 자세한 내용을 알아보세요</p>
          </Header>
          <Faq program="ftseoul"/>
          <Header>
              <h4>프로그램 참여후기</h4>
              <p>추가예정</p>
          </Header>
      </div>
    </Layout>
  );
}

export default ftseoul;