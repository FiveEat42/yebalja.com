import Layout from '../components/Layout';
import Title from "../components/Title";
import Table from "../components/Table";
import Header from "../components/temp/Header";
import Jumbotron from "../components/Jumbotron";
import Subtitle from "../components/Subtitle";


const Home = () => {
  return (
      <Layout>
        <Jumbotron />
        <Title> 내 일정에 맞는 부트캠프 찾기 </Title>
        <Subtitle> (연간일정 추가) </Subtitle>
        <Title> 한 눈에 보는 부트캠프 </Title>
        <Table />
      </Layout>
  );
}

export default Home;