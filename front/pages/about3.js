import React from "react";
import Layout from "../components/Layout";
import Team3 from "../components/Team3";
import TeamDrawing from "../components/TeamDrawing";
import Donation from "../components/Donation"

const About = () => {
  return (
    <Layout>
      {/* <Header>
        <h2>About Us</h2>
      </Header> */}
      <TeamDrawing />
      <Team3 />
      <Donation />
    </Layout>
  );
}

export default About;