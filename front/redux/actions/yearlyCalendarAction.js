import axios from 'axios';

export const getYearlyCalendarData =  async () => {
  const yearlyCalendarData = await axios.get('http://localhost:5000/api/json/yearlycalendar');

  return {
    type: 'GET_YEARLYCALENDAR_DATA',
    payload : yearlyCalendarData.data
  }
}
