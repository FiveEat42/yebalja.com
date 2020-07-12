import Layout from "../components/Layout";
import Header from "../components/Header";
import React from "react";

const Boostcamp = () => {
    return (
        <Layout>
            <Header>
                <h2>네이버 부스트캠프</h2>
                <p>개발자의 지속 가능한 성장을 추구하는 학습 커뮤니티</p>
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

export default Boostcamp;