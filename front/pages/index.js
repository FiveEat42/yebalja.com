import Layout from '../components/Layout';
import Jumbotron from '../components/Jumbotron'
import Jumbo from '../components/JumbotronSelf';
import Table from "../components/ResponsiveUsers";

const Home = () => {
  return (
    <>
      <Layout>
        <div>Hello, Next!</div>
        <Jumbotron />
      </Layout>
      <img src={require('./yebalja.png')} height="60px" />
      <Jumbo />


      <Table />


    </>
  );
}

export default Home;