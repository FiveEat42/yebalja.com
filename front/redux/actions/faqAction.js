import axios from 'axios';
import { useDispatch } from 'react-redux';

export const getData =  async () => {
  console.log('call getData faqAction');
  const faqData = await axios.get('http://localhost:5000/api/json/faq');
  return {
    type: 'GET_FAQ_DATA',
    payload : faqData
  }
}