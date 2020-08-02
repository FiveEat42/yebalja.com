import Layout from '../components/Layout';
import Jumbotron from "../components/Jumbotron";
import Table from "../components/Table";
import YearlyCalendar from '../components/YearlyCalendar';
import Header from "../components/Header";
import React, { useEffect, useState } from "react";
import TopButton from "../components/TopButton"
// import axios from 'axios';

const Home = () => {
	const [data, setData] = useState([]);
	//처음 랜더링될 때만 실행, 업데이트 경우 실행 필요 X => 2번째 인자에 빈 배열
	useEffect(() =>{
		// async function fetchData(){
		// const result = await axios('https://api.yebalja.com/api/json/program');
		// setData(result.data);
		// console.log(result.data[0].program_title);
		// }
		// fetchData();
	},[]);

  return (
    <Layout>
      <Jumbotron />
      <YearlyCalendar />
      <Header>
		<div>
			{/* {data.map(p_id => 
				<div key={p_id.program_id}>{p_id.program_title}
				</div>
				)} */}
		</div>
        <h1>한 눈에 보는 부트캠프</h1>
        <p>주요 부트캠프 특징을 한 눈에 비교해보세요</p>
      </Header>
      <Table value = {data}/>
      <TopButton />
    </Layout>
  );
}

// Home.getInitialProps = async () => {
// 	const res = await fetch('https://api.yebalja.com/api/json/program');
// 	const json = await res.json();
// 	console.log(json);
// 	return json;

// }
export default Home;
