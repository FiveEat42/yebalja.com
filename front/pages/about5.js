import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Team5 from "../components/Team2";
import TeamDrawing from "../components/TeamDrawing";
import Donation from "../components/Donation"

const About = () => {
  return (
    <Layout>
      <TeamDrawing />
      <Team5 />
      <Header>
        <h2>예발자닷컴 응원하기</h2>
        <p>예발자닷컴에게 간식쏘시고 운수 좋은 하루 보내세요</p>
      </Header>
      <Donation />
    </Layout>
  );
}

export default About;