import axios from 'axios';
//액션(type을 가진 객체) 생성함수
//API를 호출해서 JSON데이터를 가져오고 리듀서에 해당 상태를 변화시키기 위한 TYPE을 지정해줌
export const getFaqData =  async () => {
  //API 호출
  const faqData = await axios.get('http://localhost:5000/api/json/faq');
  return {
    type: 'GET_FAQ_DATA',
    payload : faqData.data
  }
}
