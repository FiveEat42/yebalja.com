import Layout from "../components/Layout";
import Header from "../components/Header";
import React from "react";
import Review from "../components/Review";

const Boostcamp = () => {
    return (
        <Layout>
            <Header>
                <h2>네이버 부스트캠프</h2>
                <p>개발자의 지속 가능한 성장을 추구하는 학습 커뮤니티</p>
            </Header>

          <Timeline />
            <Header>
                <h4>상세설명</h4>
                <p>추가예정</p>
            </Header>
            <Header>
                <h4>부트캠프 참여후기</h4>
                <p>솔직담백한 이야기를 공유합니다</p>
            </Header>
            <Review></Review> 
        </Layout>
    );
}

export default Boostcamp;