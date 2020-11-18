import Layout from '../components/commons/Layout';
import Jumbotron from "../components/Jumbotron";
import Table from "../components/Table";
import YearlyCalendar from '../components/YearlyCalendar';
import Header from "../components/commons/Header";
import React, { useEffect, useState } from "react";
// import axios from 'axios';

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
}

export default Home;
