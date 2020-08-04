import Layout from "../components/Layout";
import Header from "../components/Header";
import React from "react";
import Faq from "../components/Faq"
import Review from "../components/Review";

const Saffy = () => {
    return (
        <Layout>
            <Header>
                <h2>SSAFY</h2>
                <p>삼성 청년 SW 아카데미 대한민국 SW의 미래를 이끕니다.</p>
            </Header>
            <Header>
                <h4>타임라인</h4>
                <p>추가예정</p>
            </Header>
            <Header>
              <h3>자주 묻는 질문</h3>
              <p>항목별로 더 자세한 내용을 알아보세요</p>
            </Header>
            <Faq program="ssafy"/>
            <Header>
                <h3>부트캠프 참여후기</h3>
                <p>솔직담백한 이야기를 공유합니다</p>
            </Header>
            <Review program="ssafy"/>
        </Layout>
    );
}

export default Saffy;