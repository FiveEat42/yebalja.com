import axios from 'axios';
//액션(type을 가진 객체) 생성함수
export const getData =  async () => {
  const faqData = await axios.get('http://localhost:5000/api/json/faq');
  console.log('call getData faqAction');
  //faqData.data =>로 변경해야함
  return {
    type: 'GET_FAQ_DATA',
    payload : faqData
  }
}
