import axios from 'axios';

export const getNavbarData =  async () => {
  const navbarData = await axios.get('http://localhost:5000/api/json/navlists');
  console.log(navbarData);
  return {
    type: 'GET_NAVBAR_DATA',
    payload : navbarData.data
  }
}