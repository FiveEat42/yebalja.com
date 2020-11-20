import React from "react";
import Layout from "../components/commons/Layout";
import Table from "../components/Table";
import YearlyCalendar from "../components/YearlyCalendar";
import Header from "../components/commons/Header";

const Bootcamps = () => {
  return (
    <Layout>
      <YearlyCalendar />
      <Header>
        <h1>한 눈에 보는 부트캠프</h1>
        <p>무료 부트캠프 정보를 한 눈에 비교하세요.</p>
      </Header>
      <Table />
    </Layout>
  );
};

export default Bootcamps;
