import axios from 'axios';
//액션(type을 가진 객체) 생성함수
export const getData =  async () => {
  //API 호출
  const faqData = await axios.get('http://localhost:5000/api/json/faq');
  return {
    type: 'GET_FAQ_DATA',
    payload : faqData.data
  }
}
