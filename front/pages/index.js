import Layout from '../components/Layout'
import Jumbotron from "../components/Jumbotron";
import Table from "../components/Table"

const Home = () => {
    return (
        <Layout>
            <div>Hello, Next!</div>
            <Jumbotron />
            <Table />
        </Layout>
    );
}

export default Home;