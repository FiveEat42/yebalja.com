import axios from 'axios';

export const getYearlyCalendarData =  async () => {
  const yearlyCalendarData = await axios.get('https://api.yebalja.com/api/json/yearlycalendar');

  return {
    type: 'GET_YEARLYCALENDAR_DATA',
    payload : yearlyCalendarData.data
  }
}
