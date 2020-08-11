import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Team from "../components/Team";
import TeamDrawing from "../components/TeamDrawing";
import TeamDonation from "../components/TeamDonation"

const About = () => {
  return (
    <Layout>
      <TeamDrawing />
      <Team />
      <Header>
        <h2>예발자닷컴 응원하기</h2>
        <p>예발자닷컴에게 간식쏘시고 운수 좋은 하루 보내세요</p>
      </Header>
      <TeamDonation />
    </Layout>
  );
}

export default About;