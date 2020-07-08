import Layout from '../components/Layout';
import Jumbotron from "../components/Jumbotron";
import Table from "../components/Table";
import TextLogo from '../components/TextLogo';
import YearlyCalendar from '../components/YearlyCalendar';
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";

const Home = () => {
  return (
      <Layout>
      	<TextLogo/>
        <Jumbotron />
        <Title> 내 일정에 맞는 부트캠프 찾기 </Title>
      	<YearlyCalendar />
        <Subtitle> (연간일정 추가) </Subtitle>
        <Title> 한 눈에 보는 부트캠프 </Title>
        <Table />
      </Layout>
=======


const Home = () => {
  return (
    <>
      {/*<Layout>*/}
      {/*  <div>Hello, Next!</div>*/}
      {/*</Layout>*/}
    </>
>>>>>>> Add YearlyCalendar
  );
}

export default Home;
