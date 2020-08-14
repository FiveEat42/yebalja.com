import axios from 'axios';

export const getData =  async () => {
  const reviewData = await axios.get('http://localhost:5000/api/json/reviews');
  return {
    type: 'GET_REVIEW_DATA',
    payload : reviewData.data
  }
}
