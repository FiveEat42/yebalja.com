import Axios from "axios";

import axios from 'axios';
import { useDispatch } from 'react-redux';


export const dataFetch = response => {
  console.log('call dataFetch');
  return {
    type: 'GET_FAQ_DATA',
    payload: response,
  };
};

export const fetchTry = () => async(dispatch, getState) => {
  console.log('fetchTry');
  try{
    const response = await axios('http://localhost:5000/api/json/faq');
    dispatch(dataFetch(response));
  }
  catch(error){
    throw error;
  }
}

// export async function getData(){
//   const data = await axios('http://localhost:5000/api/json/faq');

//   const dispatch = useDispatch();
//   dispatch({type:'GET_FAQ_DATA'});
// }