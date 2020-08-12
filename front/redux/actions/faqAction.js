import axios from 'axios';
import { useDispatch } from 'react-redux';

export const getData =  async () => {
  const faqData = await axios.get('http://localhost:5000/api/json/faq');
  console.log('call getData faqAction');
  return {
    type: 'GET_FAQ_DATA',
    payload : faqData
  }
}

export const getFaqData = async () => {
  const {data} = await getData();
  console.log('getFaqData');
  console.log(data);
  return {
    type: 'GET_FAQ_DATA',
    payload : faqData
  }
}