import axios from 'axios';

export const getFaqData = async () => {
  const faqData = await axios('http://localhost:5000/api/json/faq');

  return {
    type: 'SET_DATA',
    faqData
  };
}

// export const getData = async () => dispatch => {
//   // 1초 뒤 액션 디스패치
//   const faqData = await axios.get('localhost:5000/api/json/faq');
//   console.log('faqData');
//   return faqData;
//   ;
// }
