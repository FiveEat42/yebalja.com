import React from "react";
import Layout from '../components/Layout';
import Jumbotron from "../components/Jumbotron";
import Table from "../components/Table";
import YearlyCalendar from '../components/YearlyCalendar';
import Header from "../components/Header";

const Home = () => {

  return (
    <Layout>
      <Jumbotron />
      <YearlyCalendar />
      <Header>
        <h1>한 눈에 보는 부트캠프</h1>
        <p>주요 부트캠프 특징을 한 눈에 비교해보세요</p>
      </Header>
      <Table/>
    </Layout>
  );
}

export default Home;
