import Layout from '../components/Layout';
import Jumbotron from '../components/Jumbotron';
import Table from "../components/Table";
import TextLogo from '../components/TextLogo';


const Home = () => {
  return (
    <>
      {/*<Layout>*/}
      {/*  <div>Hello, Next!</div>*/}
      {/*</Layout>*/}
      <TextLogo/>
      <Jumbotron />
      <Table />
    </>
  );
}

export default Home;