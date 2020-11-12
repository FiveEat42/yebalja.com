import React, { useEffect, useState } from "react";
import Layout from "../components/common/Layout";
import Header from "../components/common/Header";
import Jumbotron from "../components/Jumbotron";
import Table from "../components/Table";
import YearlyCalendar from "../components/YearlyCalendar";

const Home = () => {
  return (
    <Layout>
      <Jumbotron />
      <YearlyCalendar />
      <Header>
        <h1>한 눈에 보는 부트캠프</h1>
        <p>무료 부트캠프 정보를 한 눈에 비교하세요.</p>
      </Header>
      <Table />
    </Layout>
  );
};

export default Home;
