import Layout from "../components/Layout";
import Header from "../components/Header";
import React from "react";

const Woowa = () => {
    return (
        <Layout>
            <Header>
                <h2>우아한 테크코스</h2>
                <p>부트캠프 상세페이지안을 짜봅시다</p>
            </Header>
            <Header>
                <h4>타임라인</h4>
                <p>추가예정</p>
            </Header>
            <Header>
                <h4>상세설명</h4>
                <p>추가예정</p>
            </Header>
            <Header>
                <h4>프로그램 참여후기</h4>
                <p>추가예정</p>
            </Header>
        </Layout>
    );
}

export default Woowa;