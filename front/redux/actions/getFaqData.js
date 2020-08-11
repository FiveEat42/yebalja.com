import axios from 'axios';


export async function getData (){
  console.log('call getDataAPI');
  return await axios.get('http://localhost:5000/api/json/faq');
}


// export const getFaqData = async () => {
//   // console.log(faqData.data);
//   return {
//     type: 'SET_DATA',
//     faqData
//   };
// }


// export const getData = async () => dispatch => {
//   // 1초 뒤 액션 디스패치
//   const faqData = await axios.get('localhost:5000/api/json/faq');
//   console.log('faqData');
//   return faqData;
//   ;
// }



// not Worked
//import { handleActions , createAction } from 'redux-actions';
// import initialState from '../reducers/faq';

// const GET_FAQ_DATA = 'GET_FAQ_DATA';
// const GET_FAQ_SUCCESS = 'GET_FAQ_SUCCESS';
// const GET_FAQ_FAILURE = 'GET_FAQ_FAILURE';

// async function getFaqAPI(){
//   console.log('getFaqAPI() call');
//   return await axios.get('http://localhost:5000/api/json/faq');
// }

// export const getFaqData =  () => async dispatch => {
//   dispatch({type: GET_FAQ_DATA });
//   console.log('In getFaqData function')
//   try {
//     const response = await getFaqAPI();
//     dispatch({
//       type: GET_FAQ_SUCCESS,
//       payload: response
//     });
//   }
//   catch (error) {
//     dispatch({
//       type: GET_FAQ_FAILURE,
//       payload: error
//     });
//     throw error;
//   }
// }

// export default handleActions({
//   [GET_FAQ_DATA] : (state, action) => {
//     return {
//       ...state,
//       pending: true,
//       error : false
//     };
//   },
//   [GET_FAQ_SUCCESS] : (state, action) => {
//     const successData = action.payload.data;
//     console.log(action.payload.data);

//     return {
//       ...state,
//       pending: false,
//       data : successData
//     };
//   },
//   [GET_FAQ_FAILURE] : (state, action) => {
//     return {
//       ...state,
//       pending: false,
//       error: true
//     }
//   }
// }, initialState);


