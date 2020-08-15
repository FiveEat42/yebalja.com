import axios from 'axios';

export const getNoticeData =  async () => {
  const noticeData = await axios.get('http://localhost:5000/api/json/noticelists');

  return {
    type: 'GET_NOTICE_DATA',
    payload : noticeData.data
  }
}
