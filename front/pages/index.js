import Layout from '../components/Layout';
import Jumbotron from '../components/Jumbotron';
import Table from "../components/Table";
import TextLogo from '../components/TextLogo';
import YearlyCalendar from '../components/YearlyCalendar';


const Home = () => {
  return (
    <>
      {/*<Layout>*/}
      {/*  <div>Hello, Next!</div>*/}
      {/*</Layout>*/}
      <TextLogo/>
      <Jumbotron />
      <YearlyCalendar />
      <Table />
    </>
  );
}

export default Home;