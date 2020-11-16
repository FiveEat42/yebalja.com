import Layout from '../components/Layout';
import TextLogo from '../components/TextLogo';
import NavBar from '../components/NavBar';
import Landing0 from '../components/home/Landing0';
import Landing2 from '../components/home/Landing2';
import Head from 'next/head';
import Footer from '../components/Footer';
import TopButton from '../components/TopButton';

const Home = () => {

  return (
    <>
      <TextLogo/>
      <NavBar />
      <Landing0/>

      <Footer />
      <TopButton />
    </>
  );
}

export default Home;
