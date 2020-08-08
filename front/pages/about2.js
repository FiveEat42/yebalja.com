import React from "react";
import Layout from "../components/Layout";
import Team2 from "../components/Team2";
import TeamDrawing from "../components/TeamDrawing";
import Donation from "../components/Donation"

const About = () => {
  return (
    <Layout>
      {/* <Header>
        <h2>About Us</h2>
      </Header> */}
      <TeamDrawing />
      <Team2 />
      <Donation />
    </Layout>
  );
}

export default About;