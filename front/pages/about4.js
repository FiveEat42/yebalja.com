import React from "react";
import Layout from "../components/Layout";
import Team4 from "../components/Team4";
import TeamDrawing from "../components/TeamDrawing";
import Donation from "../components/Donation"

const About = () => {
  return (
    <Layout>
      {/* <Header>
        <h2>About Us</h2>
      </Header> */}
      <TeamDrawing />
      <Team4 />
      <Donation />
    </Layout>
  );
}

export default About;