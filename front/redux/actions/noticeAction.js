import axios from 'axios';

export const getNoticeData =  async () => {
  const noticeData = await axios.get('http://localhost:5000/api/json/notices');
  
  return {
    type: 'GET_NOTICE_DATA',
    payload : noticeData.data
  }
}