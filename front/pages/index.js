import Layout from '../components/Layout';
import Jumbotron from '../components/Jumbotronself';
import Table from "../components/ResponsiveUsers";

const Home = () => {
  return (
    <>
      <img src={require('./yebalja.png')} height="60px" />
      <Jumbotron />


      <Table />


    </>
  );
}

export default Home;