import axios from 'axios';

export const getNavbarData =  async () => {
  const navbarData = await axios.get('https://api.yebalja.com/api/json/navlists');
  return {
    type: 'GET_NAVBAR_DATA',
    payload : navbarData.data
  }
}
