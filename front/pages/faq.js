import Layout from "../components/Layout";
import Navibar from "../components/Navibar"
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";

const FAQ = () => {
  return (
    <Layout>
      <div>
          <Navibar />
          <Title>FAQ</Title>
          <Subtitle>
            1. 부트캠프가 진짜 무료인가요?<br/>
            네 근데 지원금도 줍니다
          </Subtitle>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    </Layout>
  );
}

export default FAQ;