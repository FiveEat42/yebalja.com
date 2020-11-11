import axios from 'axios';

export const getReviewData =  async () => {
  const reviewData = await axios.get('https://api.yebalja.com/api/json/reviews');
  return {
    type: 'GET_REVIEW_DATA',
    payload : reviewData.data
  }
}
