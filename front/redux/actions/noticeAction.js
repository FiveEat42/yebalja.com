import axios from 'axios';

export const getNoticeData =  async () => {
  const noticeData = await axios.get('https://api.yebalja.com/api/json/noticelists');

  return {
    type: 'GET_NOTICE_DATA',
    payload : noticeData.data
  }
}
