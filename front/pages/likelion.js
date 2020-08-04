import Layout from "../components/Layout";
import Header from "../components/Header";
import React from "react";
import Faq from "../components/Faq"
import Review from "../components/Review";

const Likelion = () => {
    return (
        <Layout>
            <Header>
                <h2>멋쟁이사자처럼</h2>
                <p>부트캠프 상세페이지안을 짜봅시다</p>
            </Header>
            <Header>
                <h4>타임라인</h4>
                <p>추가예정</p>
            </Header>
            <Header>
              <h3>자주 묻는 질문</h3>
              <p>항목별로 더 자세한 내용을 알아보세요</p>
            </Header>
            <Faq program="likelion"/>
            <Header>
                <h3>부트캠프 참여후기</h3>
                <p>솔직담백한 이야기를 공유합니다</p>
            </Header>
            <Review program="likelion"/>
        </Layout>
    );
}

export default Likelion;