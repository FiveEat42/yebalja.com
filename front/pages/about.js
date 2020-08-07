import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Team from "../components/Team";
import TeamDrawing from "../components/TeamDrawing";

const About = () => {
  return (
    <Layout>
        {/* <Header>
          <h2>예발자 다섯을 소개합니다</h2>
          <p>솔직히 저희도 이렇게 잘될 줄 몰랐어요</p>
        </Header> */}
        <TeamDrawing />
        <Team />
    </Layout>
  );
}

export default About;